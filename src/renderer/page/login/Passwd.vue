<template>
    <div>
        <n-input-group>
            <n-button>
                <n-icon :size="25">
                    <password-filled />
                </n-icon>
            </n-button>
            <n-input type="password" placeholder="请输入账号密码" />
        </n-input-group>
        <n-button>登录</n-button>
    </div>
</template>

<script lang="ts" setup>
import { NInput, NInputGroup, NButton, NIcon, } from "naive-ui";
import { PasswordFilled } from "@vicons/material";
</script>

<style lang="scss" scoped>
</style>
