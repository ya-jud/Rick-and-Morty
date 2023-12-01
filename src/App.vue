<script setup lang="js">
  import Menu from './components/menu.vue'
</script>

<template>
  <Menu></Menu>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style lang="sass" scoped>
  .content
    width: 100%
    display: flex
    justify-content: center
</style>