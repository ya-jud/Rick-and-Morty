<script setup lang="js">
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const routes = router.getRoutes()
    .filter(el =>
      el.path == '/main' ||
      el.path == '/characters' ||
      el.path == '/episodes' ||
      el.path == '/locations'
    )
</script>

<template>
  <div class="menu">
    <div class="menu-btn">
      Menu
    </div>
    <router-link
      v-for="({ path, name }, index) in routes"
      :to="path"
      :key="index"
      class="route"
    >
      {{ name }}
    </router-link>
  </div>
</template>

<style lang="sass" scoped>
  .menu
    position: fixed
    left: 0
    top: 0
    height: 100vh
    width: 200px
    box-shadow: 0 2px 10px 2px gray
    background: #fff
    overflow: hidden
    z-index: 1000
  .menu-btn
    padding: 10px 0 10px 0
    font-size: 15pt
    font-weight: 600
    border-bottom: 1px solid gray
  .icon
    width: 35px
    cursor: pointer
  .route
    display: block
    padding: 20px 30px
    margin: 10px 0 10px 0
    font-size: 14pt
    color: #000
    transition: .2s
  .route:first-letter
    font-size: 20pt
  .route:hover
    box-shadow: 2px 0 5px 2px gray
</style>