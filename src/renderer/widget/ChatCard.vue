<template>
    <n-list class="chat-card">
        <n-list-item
            v-for="chat in chats"
            :key="chat.id"
            @click="onSelected(chat)"
            :class="{ selected: selected == chat.id }"
            class="item"
        >
            <n-grid cols="48">
                <n-grid-item span="11">
                    <n-avatar round :size="45" :src="chat.avatar" />
                </n-grid-item>
                <n-grid-item span="37">
                    <div class="top">
                        <span class="title">{{ chat.title }}</span>
                        <n-space justify="end" class="time">
                            <span>{{ timeAgo(chat.time) }}</span>
                        </n-space>
                    </div>
                    <div class="bottom">
                        <span class="preview">{{ chat.preview }}</span>
                        <n-space justify="end" class="unread">
                            <n-badge :value="chat.unread" :max="99" />
                        </n-space>
                    </div>
                </n-grid-item>
            </n-grid>
        </n-list-item>
    </n-list>
</template>

<script lang="ts" setup>
import { NList, NListItem, NAvatar, NBadge, NSpace, NGrid, NGridItem } from "naive-ui";
import { Chat } from "../../data/Chat";
import { timeAgo } from "../../core/Util"

defineProps({
    chats: Array as () => Array<Chat>,
    selected: Number,
})

const emit = defineEmits(['selected']);
const onSelected = (chat: Chat) => {
    chat.unread = 0
    emit("selected", chat)
}
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

.chat-card {
    padding-inline-start: 0 !important;
    margin-block-start: 0 !important;
    background-color: #fff;
}

.item {
    @extend %selected;
    
    &.selected {
        background-color: #0099ff;
        color: white;

        .preview,
        .time {
            color: white;
        }
    }

    .title {
        font-weight: 600;
    }
    .preview,
    .time {
        color: #999;
        font-size: 13px;
    }

    .time,
    .unread {
        padding: 0 5px;
    }

    .top,
    .bottom {
        display: flex;
        flex-direction: row;
    }

    .title,
    .preview {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        flex-shrink: 0;
        flex: 1;
    }
}
</style>