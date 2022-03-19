<template>
  <v-row class="ma-5">
    <v-col class="col-md-4">
      <v-card>
        <v-img
          :src="characterData.image"
          height="250px"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
          <v-card-text class="text-h5">{{ characterData.name }}</v-card-text>
        </v-img>
        <v-card-title>Species: {{ characterData.species }}</v-card-title>
        <v-card-title>Status: {{ characterData.status }}</v-card-title>
        <v-card-title>Gender: {{ characterData.gender }}</v-card-title>
        <v-card-title>Origin: {{ origin.name }}</v-card-title>
        <v-card-title>Location: {{ location.name }}</v-card-title>
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-title>Episodes:</v-card-title>
        <v-list
          style="max-height: 500px; cursor: pointer"
          class="overflow-y-auto"
        >
          <v-list v-for="item in episodesList" :key="item.data.id" outlined>
            <v-list-item @click="goToEpisodeData(item.data.id)">
              <v-list-item-title>
                {{ item.data.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  props: ["id"],
  data() {
    return {
      characterData: {},
      origin: {},
      location: {},
      episodesList: {},
    };
  },
  methods: {
    goToEpisodeData(item: any) {
      this.$router
        .push({ path: "/episode/" + item, params: item })
        .catch(() => {});
    },
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/character/" + this.id)
      .then((response) => {
        this.characterData = response.data;
        this.origin = response.data.origin;
        this.location = response.data.location;
        const list = response.data.episode.map((url: string) => axios.get(url));
        Promise.all(list).then((response: any) => {
          this.episodesList = response;
        });
      });
  },
});
</script>
