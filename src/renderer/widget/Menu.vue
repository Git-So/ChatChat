<template>
    <n-list class="menu">
        <n-list-item v-for="item in menu" class="item">
            <n-grid>
                <n-grid-item span="4" class="icon">
                    <n-icon size="32">
                        <component :is="item.icon"></component>
                    </n-icon>
                </n-grid-item>
                <n-grid-item span="20" class="desc">
                    <div class="content">
                        <div class="info">
                            <div class="title">{{ item.title }}</div>
                            <div v-if="item.description" class="description">{{ item.description }}</div>
                        </div>
                        <div class="extra" v-if="item.type">
                            <n-switch />
                        </div>
                    </div>
                </n-grid-item>
            </n-grid>
        </n-list-item>
    </n-list>
</template>


<script lang="ts" setup>
import { NList, NListItem, NGrid, NGridItem, NIcon, NSwitch, } from "naive-ui";
import { Menu } from "../type";

defineProps({
    menu: Array as () => Array<Menu>,
})
</script>

<style lang="scss" scoped>
.menu {
    .icon {
        display: flex;
    }

    .content {
        display: flex;
        flex-direction: row;
        width: 100%;

        .info {
            width: 100%;

            .title,
            .description {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .title {
                font-weight: 500;
            }

            .description {
                color: #999;
                font-size: 13px;
            }
        }

        .extra {
            flex-shrink: 0;
        }
    }
}
</style>