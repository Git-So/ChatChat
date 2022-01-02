<template>
    <div>
        <Titlebar title="Hello World!">
            <template #left>前面的内容</template>
            <template #right>后面的内容</template>
        </Titlebar>
        <div>Hello World!</div>

        <router-link to="/setting/common">设置</router-link>
        <router-link to="/chat/empty">聊天室</router-link>
    </div>
</template>

<script lang="ts" setup>
import Titlebar from '../widget/Titlebar.vue';
</script>