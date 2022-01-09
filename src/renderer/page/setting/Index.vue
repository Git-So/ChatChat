<template>
    <n-layout class="setting">
        <Titlebar title="设置"></Titlebar>
        <n-layout has-sider class="main">
            <n-layout-sider class="sider" bordered>
                <Menu :menu="menus" />
            </n-layout-sider>
            <n-layout>
                <router-view />
            </n-layout>
        </n-layout>
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutSider, } from "naive-ui";
import { SettingsApplicationsFilled, ExtensionFilled, DeveloperModeFilled, InfoFilled } from "@vicons/material";
import Titlebar from "../../widget/Titlebar.vue"
import Menu from "../../widget/Menu.vue"
import { MenuRouterLink as MenuRouterLink } from "../../type";

const menus: Array<MenuRouterLink> = [{
    route: "common",
    replace: true,
    icon: SettingsApplicationsFilled,
    title: "通用",
    description: "软件通用功能配置",
},
{
    route: "plugin",
    replace: true,
    icon: ExtensionFilled,
    title: "插件",
    description: "软件插件配置",
},
{
    route: "developer",
    replace: true,
    icon: DeveloperModeFilled,
    title: "开发者选项",
    description: "开发相关配置",
},
{
    route: "about",
    replace: true,
    icon: InfoFilled,
    title: "关于",
    description: "软件信息与说明",
},];

</script>


<style lang="scss" scoped>
.setting {
    height: 100vh;

    .main {
        height: 100%;
    }
}
</style>