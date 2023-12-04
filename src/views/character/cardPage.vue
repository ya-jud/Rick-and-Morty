<script setup lang="js">
  import { useCharactersStore } from '../../store'
  import { useRoute } from 'vue-router'

  const characters = useCharactersStore()
  const route = useRoute()

  characters.getData(route.query.url)
</script>

<template>
  <div class="content">
    <div>
      <div class="image">
        <img
          :src="characters.data.image"
          :alt="characters.data.name"
        >
      </div>
      <div class="info">
        <div class="name">{{ characters.data.name }}</div>
        <div>
          <div class="gender">Gender:</div>
          <span>{{ characters.data.gender }}</span>
        </div>
        <div>
          <div class="location">Location:</div>
          <span>{{ characters.data.location.name }}</span>
        </div>
        <div>
          <div class="origin">Origin:</div>
          <span>{{ characters.data.origin.name }}</span>
        </div>
        <div>
          <div class="species">Species:</div>
          <span>{{ characters.data.species }}</span>
        </div>
        <div>
          <div class="status">Status:</div>
          <span>{{ characters.data.status }}</span>
        </div>
        <div>
          <div class="type">Type:</div>
          <span>{{ (characters.data.type) ? characters.data.type : '-' }}</span>
        </div>
      </div>
    </div>
    <!-- <table>
      <thead>
        <th>Episode</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in characters.data.episode" :key="index">{{ item }}</tr>
      </tbody>
    </table> -->
  </div>
</template>

<style lang="sass" scoped>
  .content
    width: 60%
    display: flex
    flex-direction: column
    div
      display: flex
    table
      margin-top: 50px
      height: 300px
      overflow: scroll
  .image
    width: 300px
    height: 300px
    img
      width: 100%
      box-shadow: 0 0 10px 2px gray
  .info
    height: 100%
    flex-grow: 1
    padding: 0 30px
    display: flex
    flex-direction: column
    .name
      font-size: 25pt
      font-weight: 600
      justify-self: start
      color: #cfc
      text-shadow: 1px 1px 5px #000
    div
      display: flex
      div
        width: 100px
        font-size: 15pt
        font-weight: 600
      span
        font-size: 15pt
        font-weight: 400
</style>