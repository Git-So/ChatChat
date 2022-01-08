<template>
    <n-layout class="chat">
        <n-layout has-sider class="main">
            <n-layout-sider class="sider" bordered>
                <n-layout-header class="sider-header">
                    <ChatBar @menu="showDrawer" />
                </n-layout-header>
                <n-layout :native-scrollbar="false" class="sider-content">
                    <ChatCard :chats="chats" />
                </n-layout>
            </n-layout-sider>
            <n-layout>
                <router-view />
            </n-layout>
        </n-layout>
        <Drawer ref="drawer" />
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutSider, NLayoutHeader, } from "naive-ui";
import { Chat, ChatType } from "../../../data/Chat";
import ChatCard from "../../widget/ChatCard.vue";
import ChatBar from "../../widget/ChatBar.vue";
import Drawer from "../../layout/Drawer.vue";
import { ref } from "vue";
import { ExposeDrawer } from "../../layout/interface/Expose";

const drawer = ref<ExposeDrawer>()
const showDrawer = () => {
    drawer.value?.onShow()
}

const chats: Array<Chat> = [{
    id: 1,
    title: "联系人XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=305784840&s=100",
    type: ChatType.Contact,
    type_value: "121212",
    preview: "这是一条预览消息,这是一条预览消息,这是一条预览消息,这是一条预览消息,这是一条预览消息",
    unread: 9,
    time: 2134567834
}, {
    id: 2,
    title: "群组XXXX",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=305784840&s=100",
    type: ChatType.Group,
    type_value: "121212",
    preview: "这是一条预览消息",
    unread: 0,
    time: 2134567834
}, {
    id: 3,
    title: "频道XXX",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=305784840&s=100",
    type: ChatType.Channel,
    type_value: "121212",
    preview: "这是一条预览消息",
    unread: 12,
    time: 2134567834
}, {
    id: 4,
    title: "其他类型信息",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=305784840&s=100",
    type: ChatType.Other,
    type_value: "121212",
    preview: "这是一条预览消息",
    unread: 100,
    time: 2134567834
}]
</script>

<style lang="scss" scoped>
.chat {
    .sider {
        box-sizing: content-box;

        &,
        & > :deep(.n-layout-sider-scroll-container) {
            min-width: 0 !important;
            max-width: 260px !important ;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .sider-header {
            flex-shrink: 0;
        }
    }
}
</style>