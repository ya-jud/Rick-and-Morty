<script setup lang="js">
  import { useEpisodesStore } from '../../store'
  import { useRoute } from 'vue-router'

  const episodes = useEpisodesStore()
  const route = useRoute()

  episodes.getData(route.query.url)
</script>

<template>
  card ep 
</template>