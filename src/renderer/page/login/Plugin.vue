<template>
    <Menu :menu="option" />
</template>

<script lang="ts" setup>
import { NCard, NButton, } from "naive-ui";
import Menu from "../../widget/Menu.vue";
import { MenuRouterLink } from "../../type"
import { Ref, ref } from "vue";
import { PasswordFilled, QrCodeFilled, PhoneIphoneFilled, } from "@vicons/material";

const option: Ref<MenuRouterLink[]> = ref([
    {
        title: "QICQ",
        description: "登录QQ账号",
        icon: PasswordFilled,
        route: "Account",
    },
    {
        title: "Wechat",
        description: "登录微信账号",
        icon: PasswordFilled,
        route: "Account",
    },
    {
        title: "Telegram",
        description: "登录电报账号",
        icon: QrCodeFilled,
        route: "Account",
    },
    {
        title: "XMPP",
        description: "登录XMPP账号",
        icon: PhoneIphoneFilled,
        route: "Account",
    },
    {
        title: "更多登录方式",
        description: "安装更多客户端实现",
        icon: PhoneIphoneFilled,
        route: "/setting/plugin",
    }
])
</script>

<style lang="scss" scoped>
</style>
