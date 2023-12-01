<script setup lang="js">
  import { onMounted } from 'vue'
  import { useCharactersStore } from '../../store'

  const characters = useCharactersStore()

  onMounted(async () => {
    await characters.getList()
  })
</script>

<template>
  <div class="content-main">
    <a href="https://github.com/ya-jud/Rick-and-Morty">GitHub</a>
  </div>
</template>

<style lang="sass" scoped>
  .content-main
    min-width: 600px
    max-width: 1280px
    width: 100%
    height: calc(100vh - 50px)
    display: flex
    justify-content: center
    align-items: center
    z-index: 100
    @media (width >= 1500px)
      grid-template-columns: repeat(4, 1fr)
    @media (width < 1500px) and (width > 1100px)
      grid-template-columns: repeat(3, 1fr)
    @media (width <= 1100px)
      grid-template-columns: repeat(2, 1fr)
    a
      font-size: 30pt
      padding: 20px 50px
      border-bottom: 3px solid
    a:hover:after
      content: ''
      width: 200px
      position: absolute
      bottom: 0
      height: 200px
      width: 230px
      background-image: url("../../../public/rick.png")
      background-size: 300px auto
      background-repeat: no-repeat
</style>