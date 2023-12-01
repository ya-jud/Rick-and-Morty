<script setup lang="js">
  import { defineProps } from 'vue'

  const props = defineProps({
    id: {
      type: Number,
      required: true
    },
    episode: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="element">
    <div class="id">{{ props.id }}</div>
    <div class="name">{{ props.name }}</div>
    <div class="episode">{{ props.episode }}</div>
  </div>
</template>

<style lang="sass" scoped>
  .element
    display: flex
    font-size: 15pt
    width: 50%
    padding: 10px 0
    margin-bottom: 20px
    box-shadow: 0 0 5px 1px gray
    border-radius: 10px
    cursor: pointer
    display: flex
    justify-content: space-between
  .element:hover
    box-shadow: 0 0 15px 1px gray
  .id
    margin: 0 20px
  .name
    font-weight: 600
  .episode
    margin: 0 20px
    border-bottom: 1px solid gray
    padding: 0 5px
</style>