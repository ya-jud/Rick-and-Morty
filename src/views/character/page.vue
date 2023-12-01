<script setup lang="js">
  import { useCharactersStore } from '../../store'
  import { useRouter } from 'vue-router'
  import { InfinityScroll } from '../../helpers/infinityScroll'

  /* components */
  import elementCharacter from '../../components/character/card.vue'

  const characters = useCharactersStore()
  const router = useRouter()

  const IS = new InfinityScroll(characters)
  if(characters.list.length === 0) {
    characters.getList()
    IS.addInfinityScroll() 
  }
</script>

<template>
  <div class="content-character">
    <elementCharacter
      v-for="item in characters.list"
      :location="item.location.name"
      :species="item.species"
      :image="item.image"
      :name="item.name"
      :key="item.id"
      @click="router.push({ path: '/characterCard' })"
    />
  </div>
</template>

<style lang="sass" scoped>
  .content-character
    min-width: 600px
    max-width: 1280px
    width: 100%
    height: 100%
    display: grid
    grid-auto-rows: auto
    justify-items: center
    z-index: 100
    @media (width >= 1500px)
      grid-template-columns: repeat(4, 1fr)
    @media (width < 1500px) and (width > 1100px)
      grid-template-columns: repeat(3, 1fr)
    @media (width <= 1100px)
      grid-template-columns: repeat(2, 1fr)
</style>