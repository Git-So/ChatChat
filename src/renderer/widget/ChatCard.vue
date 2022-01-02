<template>
    <n-list>
        <template v-for="chat in chats" :key="chat.id">
            <router-link
                :to="`/chat/${chat.type}/${chat.type_value}`"
                custom
                replace
                v-slot="{ navigate }"
            >
                <n-list-item @click="navigate" class="item">
                    <n-grid>
                        <n-grid-item span="5">
                            <n-avatar round :size="48" :src="chat.avatar" />
                        </n-grid-item>
                        <n-grid-item span="19">
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
            </router-link>
        </template>
    </n-list>
</template>

<script lang="ts" setup>
import { NList, NListItem, NAvatar, NBadge, NSpace, NGrid, NGridItem } from "naive-ui";
import { Chat } from "../../data/Chat";
import { timeAgo } from "../../core/Util"

defineProps({
    chats: Array as () => Array<Chat>,
})
</script>

<style lang="scss" scoped>
.item {
    margin: 0 8px;
    .title {
        font-weight: 600;
    }

    .time {
        padding-left: 5px;
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