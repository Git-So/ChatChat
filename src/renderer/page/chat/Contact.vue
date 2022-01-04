<template>
    <n-layout class="contact">
        <Titlebar title="联系人"></Titlebar>
        <n-layout class="messages-part" :native-scrollbar="false">
            <Message :messages="messages" />
        </n-layout>
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout } from "naive-ui";
import { Message as IMessage, MessageType } from "../../../data/Message";
import Titlebar from "../../widget/Titlebar.vue"
import Message from "../../widget/Message.vue"

const msg = (key) => {
    return {
        id: +key + 1,
        type: key % 10 ? MessageType.Chat : MessageType.Alert,
        sender_id: "1212",
        sender_avatar: "https://q1.qlogo.cn/g?b=qq&nk=305784840&s=100",
        sender_name: "我的昵称",
        content: "这是一条消息".repeat(key % 13 + 1),
        is_self: !(key % 3),
    }
}

const messages: Array<IMessage> = Array.from({ length: 80 }, (_, key) => msg(key))
</script>

<style lang="scss" scoped>
.contact {
    &,
    :deep(.n-layout-scroll-container) {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
}

.messages-part {
    flex: 1;
    flex-shrink: 0;
}
</style>