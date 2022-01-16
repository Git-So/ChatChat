<template>
    <n-collapse-transition :show="isShow">
        <n-layout-header bordered>
            <n-list>
                <n-list-item
                    v-for="account in accounts"
                    @click="onSelectAccount(account)"
                    class="item"
                >
                    <template #prefix>
                        <n-avatar round :size="32" :src="account.avatar" />
                    </template>
                    <div>{{ account.nickname }}</div>
                    <template #suffix v-if="selectedAccountId == account.id">
                        <n-icon size="20" color="blue">
                            <check-filled />
                        </n-icon>
                    </template>
                </n-list-item>
                <n-list-item @click="onAddAccount" class="item">
                    <template #prefix>
                        <n-icon size="32" class="icon">
                            <account-circle-filled />
                        </n-icon>
                    </template>
                    <div>添加账号</div>
                </n-list-item>
            </n-list>
        </n-layout-header>
    </n-collapse-transition>
</template>

<script lang="ts" setup>
import { NLayoutHeader, NList, NListItem, NAvatar, NCollapseTransition, NIcon, } from "naive-ui";
import { AccountCircleFilled, CheckFilled, } from "@vicons/material"
import { Account } from "../../data/Account";

defineProps({
    isShow: Boolean,
    accounts: Array as () => Array<Account>,
    selectedAccountId: Number,
})

const emit = defineEmits(["selectAccount", "addAccount",])
const onSelectAccount = (account: Account) => emit("selectAccount", account)
const onAddAccount = () => emit("addAccount")

</script>

<style lang="scss" scoped>
@import "../style/common.scss";

.item {
    @extend %selected;
}

.icon {
    display: flex;
}

:deep(.n-list-item) {
    border-bottom: 0 !important;
}
</style>