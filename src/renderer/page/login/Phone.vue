<template>
    <div>
        <n-input-group>
            <n-button>
                <n-icon :size="25">
                    <phone-iphone-filled />
                </n-icon>
            </n-button>
            <n-input placeholder="请输入手机验证码" />
            <n-button>获取验证码</n-button>
        </n-input-group>
        <n-button>登录</n-button>
    </div>
</template>

<script lang="ts" setup>
import { NInput, NInputGroup, NButton, NIcon, } from "naive-ui";
import { PhoneIphoneFilled } from "@vicons/material";
</script>

<style lang="scss" scoped>
</style>
