<script setup lang="js">
  import { useLocationsStore } from '../../store'
  import { useRouter } from 'vue-router'
  import { InfinityScroll } from '../../helpers/infinityScroll'

  /* components */
  import locationElement from '../../components/location/element.vue'

  const locations = useLocationsStore()
  const router = useRouter()

  const IS = new InfinityScroll(locations)

  if(locations.list.length === 0) {
    locations.getList()
    IS.addInfinityScroll()
  }
</script>

<template>
  <div class="content-location">
    <locationElement
      v-for="item in locations.list"
      :id="item.id"
      :type="item.type"
      :name="item.name"
      :url="item.url"
      :key="item.id"
      
    />
  </div>
  <!-- @click="router.push({ path: '/locationCard', query: { name: item.name, url: item.url } })" -->
</template>

<style lang="sass" scoped>
  .content-location
    min-width: 600px
    max-width: 1280px
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 40px
    z-index: 100
</style>