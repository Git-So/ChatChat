<template>
    <n-layout class="toolbar">
        <div class="before">
            <div class="icon-group">
                <n-button text class="icon">
                    <n-icon :size="30" class="icon-file">
                        <attach-file-filled />
                    </n-icon>
                </n-button>
            </div>
        </div>
        <n-layout class="content" :native-scrollbar="false">
            <edit-div v-model="content" ref="input" />
        </n-layout>
        <div class="after">
            <div class="icon-group">
                <n-button @click="selectEmoji" text class="icon">
                    <n-icon :size="30">
                        <emoji-emotions-filled />
                    </n-icon>
                </n-button>
                <n-button text class="icon">
                    <n-icon :size="30">
                        <send-filled />
                    </n-icon>
                </n-button>
            </div>
        </div>
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NIcon, NButton, } from "naive-ui";
import { AttachFileFilled, EmojiEmotionsFilled, SendFilled, } from "@vicons/material";
import { onMounted, Ref, ref } from "vue";
import { onStartTyping } from "@vueuse/core"
import InputWidget from "./script/input";
import EditDiv from "./EditDiv.vue";

const input: Ref<HTMLDivElement | undefined> = ref()
const content = ref("")

// const inputWidget = new InputWidget(input, content)
const selectEmoji = () => {
    console.log("selectEmoji");
    // inputWidget.insertText("😂")
}

onMounted(() => {
    // inputWidget.register()

    // onStartTyping(() => {
    //     if (inputWidget.isFocus) return
    //     input.value?.focus()
    //     console.log("聚焦");

    // })
})
</script>

<style lang="scss" scoped>
@import "../style/common.scss";
.toolbar {
    padding: 8px;

    .before,
    .after {
        @extend %flex-column;
        justify-content: flex-end;
        flex-shrink: 0;

        .icon-group {
            @extend %flex-row;
            flex-shrink: 0;
        }
    }

    & :deep(.n-layout-scroll-container) {
        @extend %flex-row;
        overflow: hidden;
        width: 100%;
    }

    .content {
        flex: 1;

        :deep(.n-scrollbar-container) {
            display: flex;
            align-items: center;
        }

        .input {
            outline: none;
            padding: 0 1em;
            max-height: 12em;
            font-size: 15px;
        }
    }

    .icon {
        margin: 0 6px;
        & .icon-file {
            transform: rotate(235deg);
        }
    }
}
</style>