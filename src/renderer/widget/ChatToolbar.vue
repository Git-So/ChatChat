<template>
    <n-layout>
        <n-space>
            <n-button text>
                <n-icon :size="30">
                    <attach-file-filled />
                </n-icon>
            </n-button>
            <n-input
                :autosize="{
                    minRows: 1,
                    maxRows: 5
                }"
            />
            <n-button text>
                <n-icon :size="30">
                    <emoji-emotions-filled />
                </n-icon>
            </n-button>
            <n-button text>
                <n-icon :size="30">
                    <send-filled />
                </n-icon>
            </n-button>
        </n-space>
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NIcon, NButton, NInput, NSpace, } from "naive-ui";
import { AttachFileFilled, EmojiEmotionsFilled, SendFilled, } from "@vicons/material";
</script>

<style lang="scss" scoped>
</style>