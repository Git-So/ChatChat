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
        <n-input
            type="textarea"
            :autosize="{
                minRows: 1,
                maxRows: 5
            }"
            placeholder="输入消息"
            autofocus
            class="input"
        />
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
import { NLayout, NIcon, NButton, NInput, NSpace, } from "naive-ui";
import { AttachFileFilled, EmojiEmotionsFilled, SendFilled, } from "@vicons/material";
</script>

<style lang="scss" scoped>
@import "../style/common.scss";
.toolbar {
    padding: 8px;

    .before,
    .after {
        @extend %flex-column;
        justify-content: flex-end;

        .icon-group {
            @extend %flex-row;
        }
    }

    & :deep(.n-layout-scroll-container) {
        @extend %flex-row;
        overflow: hidden;
        width: 100%;
    }

    .input {
        flex: 1;

        :deep(.n-input__textarea-el)::-webkit-scrollbar {
            display: none;
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