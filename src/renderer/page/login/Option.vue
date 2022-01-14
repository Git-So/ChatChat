<template>
    <div>
        <Menu :menu="option" />
    </div>
</template>

<script lang="ts" setup>
import Menu from "../../widget/Menu.vue";
import { MenuRouterLink } from "../../type"
import { Ref, ref } from "vue";
import { PasswordFilled, QrCodeFilled, PhoneIphoneFilled, } from "@vicons/material";

const option: Ref<MenuRouterLink[]> = ref([
    {
        title: "密码登录",
        description: "通过账号密码验证登录",
        icon: PasswordFilled,
        route: "Passwd",
    },
    {
        title: "扫码登录",
        description: "通过移动设备扫码验证登录",
        icon: QrCodeFilled,
        route: "QRCode",
    },
    {
        title: "手机验证",
        description: "通过移动设备接受验证码验证登录",
        icon: PhoneIphoneFilled,
        route: "Phone",
    }
])
</script>

<style lang="scss" scoped>
</style>
