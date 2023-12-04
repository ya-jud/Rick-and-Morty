<script setup lang="js">
  import { useEpisodesStore } from '../../store'
  import { useRouter } from 'vue-router'
  import { InfinityScroll } from '../../helpers/infinityScroll'

  /* components */
  import episodeElement from '../../components/episode/element.vue'

  const episode = useEpisodesStore()
  const router = useRouter()

  const IS = new InfinityScroll(episode)
  if(episode.list.length === 0) {
    episode.getList()
    IS.addInfinityScroll()
  }
</script>

<template>
  <div class="content-episode">
    <episodeElement
      v-for="item in episode.list"
      :id="item.id"
      :episode="item.episode"
      :name="item.name"
      :url="item.url"
      :key="item.id"
    />
  </div>
  <!-- @click="router.push({ path: '/episodeCard', query: { name: item.name, url: item.url } })" -->
</template>

<style lang="sass" scoped>
  .content-episode
    min-width: 600px
    max-width: 1280px
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    z-index: 100
</style>