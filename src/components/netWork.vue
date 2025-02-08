<script setup lang='ts'>
const isOnline = useOnline()
</script>

<template>
  <div v-if="!isOnline" class="fixed top-0 z-20 w-full">
    <wd-notice-bar text="暂无网络" prefix="wifi-error" type="danger" />
  </div>
</template>
