<template>
    <n-drawer
        v-model:show="isShow"
        :on-update:show="onUpdateShowState"
        placement="left"
        width="272"
    >
        <n-drawer-content>
            <template #header>Header</template>
            <n-layout>
                <Menu :menu="menu" />
            </n-layout>
            <template #footer>
                <n-space vertical>
                    <span>Chat Chat</span>
                    <n-space justify="end">v0.1</n-space>
                </n-space>
            </template>
        </n-drawer-content>
    </n-drawer>
</template>

<script lang="ts" setup>
import { NDrawer, NDrawerContent, NSpace, NLayout, } from "naive-ui";
import { computed, shallowRef } from "vue";
import Menu from "../widget/Menu.vue";
import store from "../store";
import { ExposeDrawer } from "./interface/Expose";
import { PersonFilled, GroupRound, SettingsFilled, DarkModeFilled, } from "@vicons/material";
import { Menu as IMenu, MenuType } from "../type";

const isShow = computed(() => store.state.isShowDrawer)

const menu: Array<IMenu> = [{
    icon: PersonFilled,
    title: "联系人",
}, {
    icon: GroupRound,
    type: MenuType.Switch,
    title: "群组",
}, {
    icon: PersonFilled,
    title: "联系人",
    description: "我的联系人，哈哈哈哈哈",
}, {
    icon: PersonFilled,
    type: MenuType.Switch,
    title: "联系人",
    description: "我的联系人，哈哈哈哈哈",
}, {
    icon: SettingsFilled,
    title: "设置",
}, {
    icon: DarkModeFilled,
    title: "夜间模式",
    type: MenuType.Switch,
}]
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