<template>
    <div>
        <Titlebar title="Hello World!">
            <template #left>前面的内容</template>
            <template #right>后面的内容</template>
        </Titlebar>
        <div>Hello World!</div>

        <router-link to="/setting/plugin">设置</router-link>
    </div>
</template>

<script lang="ts" setup>
import Titlebar from '../widget/Titlebar.vue';


</script>