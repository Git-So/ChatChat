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
            <div
                ref="input"
                @input="inputContent"
                @focus="inputFocus"
                v-html="content"
                class="input"
                contenteditable="true"
            ></div>
        </n-layout>
        <div class="after">
            <div class="icon-group">
                <n-button text class="icon">
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
import { Ref, ref, watch } from "vue";
import { onStartTyping } from "@vueuse/core"
import { parseHTML, preview } from "./script/preview"

const input: Ref<HTMLDivElement | undefined> = ref()
const content = ref("")

// 输入聚焦
const inputFocus = (e: Event) => {
}

// 输入转化
const inputContent = (e: Event) => {
    content.value = preview(parseHTML(e.target as HTMLElement))
}

// 自动聚焦输入
onStartTyping(() => input.value?.focus())

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