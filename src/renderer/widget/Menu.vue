<template>
    <n-list class="menu">
        <n-list-item v-for="item in menu" class="item" :class="{ 'hide-border': hideBorder }">
            <template #prefix>
                <n-icon size="32">
                    <component :is="item.icon"></component>
                </n-icon>
            </template>
            <div class="content">
                <div class="title">{{ item.title }}</div>
                <div v-if="item.description" class="description">{{ item.description }}</div>
            </div>
            <template #suffix>
                <n-switch />
            </template>
        </n-list-item>
    </n-list>
</template>


<script lang="ts" setup>
import { NList, NListItem, NIcon, NSwitch, } from "naive-ui";
import { Menu } from "../type";

defineProps({
    menu: Array as () => Array<Menu>,
    hideBorder: Boolean,
})
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

.menu {
    .item {
        &.hide-border {
            border: none;
        }
    }
    
    .content {
        display: flex;
        flex-direction: column;
        min-width: 0;

        .title,
        .description {
            @extend %text-ellipsis;
        }

        .description {
            color: #999;
            font-size: 13px;
        }
    }
}
</style>