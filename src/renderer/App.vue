<template>
    <n-dialog-provider>
        <n-message-provider>
            <router-view />
        </n-message-provider>
    </n-dialog-provider>
</template>

<script lang="ts" setup>
import { NDialogProvider, NMessageProvider } from "naive-ui";
import { RouterView } from "vue-router";
</script>

