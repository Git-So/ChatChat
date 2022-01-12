<template>
    <n-list class="menu">
        <n-list-item
            v-for="item in menu"
            @click="onAction(item)"
            :class="{ 'hide-border': hideBorder }"
            class="item"
        >
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
                <template v-if="item.type == MenuType.Switch">
                    <n-switch @update:value="(item as IMenuSwitch).update" />
                </template>
            </template>
        </n-list-item>
    </n-list>
</template>


<script lang="ts" setup>
import { NList, NListItem, NIcon, NSwitch, } from "naive-ui";
import router from "../router/main";
import { Menu, MenuType, MenuButton, MenuRouterLink, MenuSwitch, } from "../type";

type IMenuSwitch = MenuSwitch;

defineProps({
    menu: Array as () => Array<Menu>,
    hideBorder: Boolean,
})

const onAction = (menu: Menu) => {
    // 按钮事件
    if (menu.type == MenuType.Button) {
        (menu as MenuButton).action(menu as MenuButton);
        return
    }

    // 默认事件
    const route = (menu as MenuRouterLink).route
    const replace = (menu as MenuRouterLink).replace
    if (route)
        replace ? router.replace(route) : router.push(route);
}

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