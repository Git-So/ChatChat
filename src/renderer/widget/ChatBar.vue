<template>
    <n-layout-header bordered class="chat-bar">
        <n-grid>
            <n-grid-item span="4" class="n-gi-btn">
                <n-button text @click="onMenu">
                    <n-icon size="25">
                        <menu-filled />
                    </n-icon>
                </n-button>
            </n-grid-item>
            <n-grid-item span="20">
                <n-input placeholder="搜索" />
            </n-grid-item>
        </n-grid>
    </n-layout-header>
</template>

<script lang="ts" setup>
import { NButton, NIcon, NInput, NLayoutHeader, NGrid, NGridItem } from "naive-ui";
import { MenuFilled } from "@vicons/material";

const emit = defineEmits(["menu"])
const onMenu = () => emit("menu")
</script>

<style lang="scss" scoped>
.chat-bar {
    padding: 5px 8px;

    .n-gi-btn {
        display: flex;
    }
}
</style>