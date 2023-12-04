<script setup lang="js">
  import { useLocationsStore } from '../../store'
  import { useRoute } from 'vue-router'

  const locations = useLocationsStore()
  const route = useRoute()

  locations.getData(route.query.url)
</script>

<template>
  card loc 
</template>