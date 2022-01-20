<template>
    <div
        ref="input"
        v-html="content"
        :placeholder="placeholder"
        @input="onInput"
        @click="onClick"
        @focus="onFocus"
        @blur="onBlur"
        @compositionstart="onCompositionstart"
        @compositionupdate="onCompositionupdate"
        @compositionend="onCompositionend"
        class="edit-div"
        contenteditable="true"
    ></div>
</template>

<script lang="ts" setup>
import { nextTick, Ref, ref, watch } from 'vue';
import { parseHTML, preview } from './script/preview';

defineProps({
    placeholder: {
        type: String,
        default: "输入消息..."
    }
})

const input: Ref<HTMLDivElement | undefined> = ref()
const content = ref("")

watch(content, (value) => {
    nextTick(() => {
        console.log("更新了");
        resetIndex()
    })
})

// 光标位置
interface Index {
    offset: number;
    length: number;
    child?: Index;
}
let index: Index | undefined = undefined
const saveIndex = () => {
    if (!input.value) return

    // 初始化
    index = undefined

    // 获取光标位置
    const selection = document.getSelection()
    const range = selection?.getRangeAt(0)
    console.log(range);
    if (!range) return
    index = {
        offset: range.endOffset,
        length: getNodeLength(range.endContainer),
    }
    if (range.endContainer == input.value) return

    let node = range.endContainer
    let parentNode = node.parentNode
    while (node && parentNode) {
        // 查找元素位置
        for (const [idx, item] of parentNode.childNodes.entries()) {
            if (item == node) {
                index = {
                    offset: idx,
                    length: parentNode.childNodes.length,
                    child: index,
                }
            }
            break
        }

        if (parentNode === input.value) break

        // 上层元素
        node = parentNode
        parentNode = node.parentNode
    }
}
const resetIndex = () => { // 必须为 nextTick 内部执行
    // 获取光标所在元素
    let node: Node = input.value as Node
    let idx = index
    do {
        if (!idx) break

        const nodes = node.childNodes
        if (nodes.length < 1 || nodes.length <= idx?.offset) break

        // 获取下层信息
        node = node.childNodes[idx?.offset || 0]
        idx = idx?.child
    } while (node && idx?.child)

    // 创建范围
    const range = new Range()
    range.selectNodeContents(node)
    range.setStart(node, idx?.offset || 0)
    range.setEnd(node, idx?.offset || 0)

    // 恢复光标
    const selection = document.getSelection()
    selection?.removeAllRanges()
    selection?.addRange(range)
}

const onInput = () => {
    if (!input.value || isComposition) return
    saveIndex()
    content.value = preview(parseHTML(input.value))
}

const onClick = () => saveIndex()

// 聚焦状态
let isFocus = false
const onFocus = () => isFocus = true
const onBlur = () => isFocus = false

// 输入法输入状态
let isComposition = false
const onCompositionstart = () => isComposition = true
const onCompositionupdate = () => isComposition = true
const onCompositionend = () => isComposition = false


// 获取节点光标可用长度
const getNodeLength = (node: Node) => {
    if (node.nodeName == "#text") {
        return node.textContent?.length || 0
    }
    return node.childNodes.length
}

</script>

<style lang="scss" scoped>
.edit-div {
    outline: none;
    padding: 0 1em;
    max-height: 12em;
    font-size: 15px;

    &:empty::before {
        content: attr(placeholder);
        color: #ccc;
    }
}
</style>