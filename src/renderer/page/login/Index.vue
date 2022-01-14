<template>
    <n-layout>
        <Titlebar title="登录页" />
        <div class="section">
            <n-card class="card">
                <router-view></router-view>
            </n-card>
        </div>
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NCard, } from "naive-ui";
import Titlebar from "../../widget/Titlebar.vue";
</script>

<style lang="scss" scoped>
.section {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}
.card {
    width: 600px;
    height: 400px;
}
</style>
