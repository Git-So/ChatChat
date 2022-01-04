<template>
    <n-list class="message">
        <n-list-item
            v-for="message in messages"
            :class="{ 'is-self': message.is_self }"
            class="item"
        >
            <div :class="{ alert: message.type == MessageType.Alert }" class="main">
                <!-- 提示 -->
                <template v-if="message.type == MessageType.Alert">
                    <div class="content" v-html="message.content" />
                </template>
                <!-- 对话 -->
                <template v-if="message.type == MessageType.Chat">
                    <div class="avatar">
                        <n-avatar round :size="45" :src="message.sender_avatar" />
                    </div>
                    <div class="info">
                        <div class="title">{{ message.sender_name }}</div>
                        <div class="content" v-html="message.content" />
                    </div>
                </template>
            </div>
        </n-list-item>
    </n-list>
</template>

<script lang="ts" setup>
import { NList, NListItem, NAvatar } from "naive-ui";
import { Message, MessageType } from "../../data/Message";

defineProps({
    messages: Array as () => Array<Message>,
})

</script>

<style lang="scss" scoped>
@import "../style/widget/Message.scss";
</style>