<template>
    <n-collapse-transition :show="isShow">
        <n-layout-header bordered>
            <n-list>
                <n-list-item>
                    <template #prefix>
                        <n-icon>
                            <account-circle-filled />
                        </n-icon>
                    </template>
                    <div>添加账号</div>
                    <template #suffix></template>
                </n-list-item>
            </n-list>
        </n-layout-header>
    </n-collapse-transition>
</template>

<script lang="ts" setup>
import { NLayoutHeader, NList, NListItem, NAvatar, NCollapseTransition, NIcon, } from "naive-ui";
import { AccountCircleFilled } from "@vicons/material"

defineProps({
    isShow: Boolean,
})

</script>

<style lang="scss" scoped>
</style>