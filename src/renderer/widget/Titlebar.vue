<template>
    <n-layout-header bordered class="titlebar">
        <div class="left">
            <n-button text v-if="isShowBackBtn">
                <n-icon size="32" @click="router.back">
                    <arrow-back-filled />
                </n-icon>
            </n-button>
            <slot name="left"></slot>
        </div>
        <n-h2 class="title">{{ title }}</n-h2>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </n-layout-header>
</template>
<script lang="ts" setup>
import { NLayoutHeader, NButton, NIcon, NH2 } from "naive-ui";
import { ArrowBackFilled } from "@vicons/material";
import router from "../router"
import { computed, Ref } from "vue";

defineProps({
    title: String,
})

const isShowBackBtn: Ref<boolean> = computed(() => {
    return !!window.history.state.back
})

</script>


<style lang="scss" scoped>
.titlebar {
    width: 100vw;
    display: flex;
    flex-direction: row;

    .left,
    .right {
        flex-shrink: 0;
    }

    .title {
        margin: 0;
        flex-grow: 2;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
</style>
