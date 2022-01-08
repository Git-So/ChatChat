<template>
    <n-layout class="drawer-header">
        <n-avatar round :size="50" :src="account?.avatar" />
        <n-space justify="space-between" class="info">
            <n-space vertical>
                <span class="nickname">{{ account?.nickname }}</span>
                <span class="uid">UID: {{ account?.uid }}</span>
            </n-space>
            <n-button text @click="onUp">
                <n-icon size="35" class="arrow" :class="{ up: up }">
                    <keyboard-arrow-up-filled />
                </n-icon>
            </n-button>
        </n-space>
    </n-layout>
</template>

<script lang="ts" setup>
import {
    NLayout, NAvatar, NSpace, NButton, NIcon,
} from "naive-ui";
import { KeyboardArrowUpFilled } from "@vicons/material";
import { Account } from "../../data/Account";

defineProps({
    account: Object as () => Account,
    up: Boolean,
})

const emit = defineEmits(['handle',])
const onUp = () => {
    emit("handle")
}
</script>


<style lang="scss" scoped>
.drawer-header {
    width: 100%;

    :deep(.n-layout-scroll-container) {
        overflow: hidden;
        width: 100%;
    }

    .info {
        padding: 0.6rem 0;

        .uid {
            font-size: 0.9rem;
        }
    }
}

.arrow {
    transition-duration: 0.3s;
    transform: rotate(-180deg);
}

.up {
    transform: rotate(0deg);
}
</style>