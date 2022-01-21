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
import { IEditDiv } from './EditDiv';
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
        if (!input.value || isComposition) return
        console.log("更新了");
        resetIndex()
    })
})

// 光标位置，尾部向前推算位置
const index: number[] = [0] // 默认为尾部
const saveIndex = () => {
    if (!input.value) return

    // 获取光标位置
    const selection = document.getSelection()
    const range = selection?.getRangeAt(0)
    if (!range) return

    // 光标位于总输入节点
    index.length = 0
    if (range.endContainer === input.value) {
        const nodes = input.value.childNodes
        index.unshift(nodes.length - range.endOffset)
        if (nodes.length <= range.endOffset) return

        const node = input.value.childNodes[range.endOffset]
        if (node.nodeName != "#text") return
        index.push(getNodeLength(node))
        return
    }

    // 光标位于文本节点
    const node = range.endContainer
    index.push(getNodeLength(node) - range.endOffset)
    for (const [idx, item] of Array.from(input.value!.childNodes).reverse().entries()) {
        if (item === range.endContainer) {
            index.unshift(idx)
            break
        }
    }

    // 位于文件节点最后不应聚焦于文本节点
    if (index[1] == 0) index.pop()
}
const resetIndex = () => { // 必须为 nextTick 内部执行
    const selection = document.getSelection()
    selection?.removeAllRanges()
    selection?.addRange(getIndexRange(index))
}

// 生成预览输入
const onInputPreview = () => {
    if (!input.value || isComposition) return
    content.value = preview(parseHTML(input.value))
}

// 光标处添加输入内容
const insertText = (text: string, isIndex = true, idx = [0]) => {
    const range = getIndexRange(isIndex ? index : idx)
    range.insertNode(document.createTextNode(text))
    onInputPreview()
}

// 输入内容转换
const onInput = () => onInputPreview()

// 切换光标位置
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
    if (node.nodeName == "#text")
        return node.textContent?.length || 0
    return node.childNodes.length
}

// 获取光标所在范围
const getIndexRange = (index: number[]): Range => {
    // 获取光标所在元素
    let node: Node = input.value as Node
    let offset = getNodeLength(node) - index[0]

    // 光标位于文本节点
    if (index.length > 1) {
        node = node.childNodes[offset - 1]
        offset = getNodeLength(node) - index[1]
    }

    // 创建范围
    offset = Math.max(offset, 0)
    const range = new Range()
    range.selectNodeContents(node)
    range.setStart(node, offset)
    range.setEnd(node, offset)

    return range
}

defineExpose(<IEditDiv>{
    isFocus,
    insertText,
})

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