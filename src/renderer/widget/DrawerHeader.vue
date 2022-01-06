<template>
    <n-layout class="drawer-header">
        <n-avatar round :size="50" src="https://q1.qlogo.cn/g?b=qq&nk=305784840&s=100" />
        <n-space justify="space-between" class="info">
            <n-space vertical>
                <span class="nickname">我的昵称</span>
                <span class="uid">UID: 88888888</span>
            </n-space>
            <n-button text @click="onclick">
                <n-icon size="35" class="arrow" :class="{ odd: isOdd }">
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
import { ref } from "vue";

const isOdd = ref(false)
const emit = defineEmits(['handle',])
const onclick = () => {
    isOdd.value = !isOdd.value
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
}

.odd {
    transform: rotate(180deg);
}
</style>