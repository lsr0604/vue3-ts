<template>
    <div>测试接口页面</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import userApi from '@/api/user'

onMounted(() => {
    userApi.getDict().then(res => {
        console.log(res);
    })
})
</script>

<style scoped></style>