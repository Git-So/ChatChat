<template>
    <n-layout class="chat">
        <n-layout has-sider class="main">
            <n-layout-sider class="sider" bordered>
                <n-layout-header class="sider-header">
                    <ChatBar @menu="showDrawer" />
                </n-layout-header>
                <n-layout :native-scrollbar="false" class="sider-content">
                    <ChatCard :chats="chats" :selected="chatSelected" @selected="onChatSelected" />
                </n-layout>
            </n-layout-sider>
            <n-layout class="contact">
                <Titlebar title="联系人"></Titlebar>
                <n-layout class="messages-part" :native-scrollbar="false">
                    <Message :messages="messages" />
                </n-layout>
                <n-layout-footer>
                    <ChatToolbar />
                </n-layout-footer>
            </n-layout>
        </n-layout>
        <Drawer ref="drawer" />
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutFooter, } from "naive-ui";
import { Chat, ChatType } from "../../data/Chat";
import ChatCard from "../widget/ChatCard.vue";
import ChatBar from "../widget/ChatBar.vue";
import Drawer from "../layout/Drawer.vue";
import { ref } from "vue";
import { ExposeDrawer } from "../layout/interface/Expose";
import { Message as IMessage, MessageType } from "../../data/Message";
import Titlebar from "../widget/Titlebar.vue"
import ChatToolbar from "../widget/ChatToolbar.vue"
import Message from "../widget/Message.vue"

const drawer = ref<ExposeDrawer>()
const showDrawer = () => {
    drawer.value?.onShow()
}

const chatSelected = ref(0)
const onChatSelected = (chat: Chat) => {
    chatSelected.value = chat.id
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

const msg = (key: number) => {
    return {
        id: +key + 1,
        type: key % 10 ? MessageType.Chat : MessageType.Alert,
        sender_id: "1212",
        sender_avatar: "https://q1.qlogo.cn/g?b=qq&nk=305784840&s=100",
        sender_name: "我的昵称",
        content: "🔥😂这是一条消息".repeat(key % 13 + 1),
        is_self: !(key % 3),
    }
}

const messages: Array<IMessage> = Array.from({ length: 80 }, (_, key) => msg(key))
</script>

<style lang="scss" scoped>
.chat {
    .sider {
        box-sizing: content-box;

        .sider-header {
            flex-shrink: 0;
        }
    }

    .contact {
        height: 100vh;
    }

    .messages-part {
        flex: 1;
        flex-shrink: 0;
    }
}
</style>