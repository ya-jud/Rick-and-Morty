<script setup lang="js">
  import { defineProps } from 'vue'

  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    species: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="character">
      <div class="characterHeader">
        <img
          :src="props.image"
          :alt="props.name"
        />
        <div class="name">{{ props.name }}</div>
      </div>
      <div class="characterData">
        <div>Species: {{ props.species }}</div>
        <div>Location: {{ props.location }}</div>
      </div>
    </div>
</template>

<style lang="sass" scoped>
  .character
    max-width: 250px
    width: 100%
    margin-bottom: 40px
    cursor: pointer
    z-index: 50
    box-shadow: 0 0 10px 0 gray
    border-radius: 10px
    transition: .2s
    overflow: hidden
  .character:hover
    box-shadow: 0 0 20px 5px gray
    img
      transform: scale(1.2)
  .characterHeader
    position: relative
    height: auto
    color: white
    overflow: hidden
  .name
    position: absolute
    bottom: 0
    width: 100%
    padding-bottom: 10px
    font-size: 18pt
    font-weight: 600
    display: flex
    justify-content: center
    align-items: center
    text-shadow: 1px 1px 5px #000
    color: #cfc
  img
    width: 100%
    z-index: -2
    object-fit: contain
    transition: .2s
  .characterData
    text-align: left
    padding-bottom: 5px
    div
      padding: 5px 0 0 10px
</style>