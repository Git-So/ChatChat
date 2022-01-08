<template>
    <n-drawer
        v-model:show="isShow"
        :on-update:show="onUpdateShowState"
        placement="left"
        width="260"
    >
        <n-drawer-content class="content">
            <template #header>
                <DrawerHeader
                    :account="account"
                    @handle="onChangeDrawerAccount"
                    :up="isShowDrawerAccount"
                />
            </template>
            <n-layout :native-scrollbar="false" class="drawer-option">
                <DrawerAccount
                    :show="isShowDrawerAccount"
                    :accounts="accounts"
                    :selected-account-id="selectedAccountId"
                />
                <Menu :menu="menu" hide-border />
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
import { computed, ref } from "vue";
import Menu from "../widget/Menu.vue";
import DrawerHeader from "../widget/DrawerHeader.vue";
import DrawerAccount from "../widget/DrawerAccount.vue";
import store from "../store";
import { ExposeDrawer } from "./interface/Expose";
import { PersonFilled, GroupRound, SettingsFilled, DarkModeFilled, } from "@vicons/material";
import { Menu as IMenu, MenuType } from "../type";
import { Account as IAccount } from "../../data/Account";

const account: IAccount = {
    id: 1,
    uid: "305784840",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=305784840&s=100",
    nickname: "这是昵称",
}
    ;

const selectedAccountId = 2
const accounts: Array<IAccount> = [{
    id: 1,
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=305784840&s=100",
    nickname: "这是昵称",
}, {
    id: 2,
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=305782840&s=100",
    nickname: "一个昵称",
}, {
    id: 3,
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=3057848&s=100",
    nickname: "还是昵称",
}]

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
    description: "我的联系人，哈哈哈哈哈1111",
}, {
    icon: PersonFilled,
    type: MenuType.Switch,
    title: "联系人",
    description: "我的联系人，哈哈哈哈哈1111",
}, {
    icon: SettingsFilled,
    title: "设置",
}, {
    icon: DarkModeFilled,
    title: "夜间模式",
    type: MenuType.Switch,
}, {
    icon: DarkModeFilled,
    title: "夜间模式",
    type: MenuType.Switch,
}, {
    icon: DarkModeFilled,
    title: "夜间模式",
    type: MenuType.Switch,
}, {
    icon: DarkModeFilled,
    title: "夜间模式",
    type: MenuType.Switch,
}, {
    icon: DarkModeFilled,
    title: "夜间模式",
    type: MenuType.Switch,
}]

// 抽屉账号列表
const isShowDrawerAccount = ref(false);
const onChangeDrawerAccount = () => {
    isShowDrawerAccount.value = !isShowDrawerAccount.value
}

// 显示状态
const isShow = computed(() => store.state.isShowDrawer)
const onUpdateShowState = (isShow: boolean) => {
    store.commit("updateDrawerState", isShow)
    if (!isShow) isShowDrawerAccount.value = false
}
const onShow = () => onUpdateShowState(true)
const onHide = () => onUpdateShowState(false)



defineExpose(<ExposeDrawer>{
    onUpdateShowState, onShow, onHide,
})
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

.content {
    :deep(.n-list) {
        padding: 8px 16px;
    }

    :deep(.n-drawer-header) {
        padding-bottom: 4px;
    }

    :deep(.n-drawer-body),
    :deep(.n-drawer-body-content-wrapper) {
        @extend %flex-column;
        padding: 0;
    }

    :deep(.n-drawer-header__main) {
        width: 100%;
    }

    :deep(.n-drawer-body .n-drawer-body-content-wrapper) {
        padding-top: 0;
    }
}
</style>