<template>
    <n-layout class="setting">
        <Titlebar title="设置"></Titlebar>
        <n-layout has-sider class="main">
            <n-layout-sider class="sider" bordered>
                <n-list>
                    <template v-for="item in routes" key="item.name">
                        <router-link
                            :to="item.name"
                            custom
                            replace
                            v-slot="{ navigate }"
                            active-class="active"
                        >
                            <n-list-item @click="navigate">
                                <template #prefix>
                                    <n-icon size="42">
                                        <component :is="item.icon"></component>
                                    </n-icon>
                                </template>
                                <n-thing :title="item.title" :description="item.description"></n-thing>
                            </n-list-item>
                        </router-link>
                    </template>
                </n-list>
            </n-layout-sider>
            <n-layout>
                <router-view />
            </n-layout>
        </n-layout>
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutSider, NList, NListItem, NIcon, NThing } from "naive-ui";
import { SettingsApplicationsFilled, ExtensionFilled, DeveloperModeFilled, InfoFilled } from "@vicons/material";
import Titlebar from "../../widget/Titlebar.vue"
import { Ref, ref, shallowRef } from "vue";


interface SettingRoute {
    name: string;
    icon: Ref;
    title: string;
    description: string;
}
const routes = ref<SettingRoute[]>([
    {
        name: "common",
        icon: shallowRef(SettingsApplicationsFilled),
        title: "通用",
        description: "软件通用功能配置",
    },
    {
        name: "plugin",
        icon: shallowRef(ExtensionFilled),
        title: "插件",
        description: "软件插件配置",
    },
    {
        name: "developer",
        icon: shallowRef(DeveloperModeFilled),
        title: "开发者选项",
        description: "开发相关配置",
    },
    {
        name: "about",
        icon: shallowRef(InfoFilled),
        title: "关于",
        description: "软件信息与说明",
    },
]);
</script>


<style lang="scss" scoped>
.setting {
    height: 100vh;

    .main {
        height: 100%;
    }
}
</style>