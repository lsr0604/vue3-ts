<template>
  <div>
    <h3>测试mock</h3>
    <div>{{ info }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import userApi from '@/api/user'

const info = ref<any>([])
onMounted(() => {
  userApi.getTest().then((res) => {
    console.log('test info:', res)
    info.value = res.data
  })
})
</script>
