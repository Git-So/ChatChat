<template>
    <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
        <n-dialog-provider>
            <n-message-provider>
                <router-view />
            </n-message-provider>
        </n-dialog-provider>
    </n-config-provider>
</template>

<script lang="ts" setup>
import { NDialogProvider, NMessageProvider, NConfigProvider, NThemeEditor } from "naive-ui";
import { RouterView } from "vue-router";
import { theme, themeOverrides } from "./theme"
</script>

