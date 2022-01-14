<template>
    <div>
        <n-avatar round :src="avatarUrl" :size="70" />
        <n-input-group>
            <n-button>
                <n-icon :size="25">
                    <cloud-circle-filled />
                </n-icon>
            </n-button>
            <n-input placeholder="请输入服务器地址" />
        </n-input-group>
        <n-input-group>
            <n-button>
                <n-icon :size="25">
                    <account-circle-filled />
                </n-icon>
            </n-button>
            <n-input placeholder="请输入用户账号" />
        </n-input-group>
        <n-button @click="onGoOption">下一步</n-button>
    </div>
</template>

<script lang="ts" setup>
import { NAvatar, NInputGroup, NInput, NButton, NIcon, } from "naive-ui";
import { CloudCircleFilled, AccountCircleFilled } from "@vicons/material";
import { ref } from "vue";
import router from "../../router";

const avatarUrl = ref("default.png")

const onGoOption = () => router.push("option")

</script>

<style lang="scss" scoped>
</style>
