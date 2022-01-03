<template>
    <n-drawer
        v-model:show="isShow"
        :on-update:show="onUpdateShowState"
        placement="left"
        width="272"
    >
        <n-layout>haha</n-layout>
    </n-drawer>
</template>

<script lang="ts" setup>
import { NDrawer, NLayout } from "naive-ui";
import { computed } from "vue";
import store from "../store";
import { ExposeDrawer } from "./interface/Expose";

const isShow = computed(() => store.state.isShowDrawer)

// 显示状态
const onUpdateShowState = (isShow: boolean) => store.commit("updateDrawerState", isShow)
const onShow = () => onUpdateShowState(true)
const onHide = () => onUpdateShowState(false)

defineExpose(<ExposeDrawer>{
    onUpdateShowState, onShow, onHide,
})
</script>

<style lang="scss" scoped>
</style>