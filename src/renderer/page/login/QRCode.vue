<template>
    <div>
        <n-image preview-disabled :src="image" width="150" />
    </div>
</template>

<script lang="ts" setup>
import { NImage } from "naive-ui";
import { ref } from "vue";

const image = ref("https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg")
</script>

<style lang="scss" scoped>
</style>
