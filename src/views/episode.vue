<template>
  <v-card>
    <v-card-title class="d-flex justify-center">
      Name of episode: {{ episodeData.name }}
      <v-card-text class="d-flex justify-center">
        Season: {{ sliceSeason }} Episode:
        {{ sliceEpisodeNumber }}
      </v-card-text>
      <v-card-subtitle>{{ episodeData.air_date }}</v-card-subtitle>
    </v-card-title>
    <v-card-title class="d-flex justify-center">Characters: </v-card-title>
    <v-row>
      <v-col
        class="col-md-3"
        v-for="item in listCharacter"
        :key="item.id"
        @click="goToCharacterData(item.data.id)"
        fluid
      >
        <card-of-character
          :urlImg="item.data.image"
          :nameCharacter="item.data.name"
        >
          <span slot="statusCharacter">{{ item.data.status }}</span>
          <span slot="speciesCharacter">{{ item.data.species }}</span>
        </card-of-character>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import cardOfCharacter from "../components/CardOfCharacter.vue";

export default Vue.extend({
  props: ["id"],
  components: {
    cardOfCharacter,
  },
  data() {
    return {
      episodeData: {},
      sliceSeason: "",
      sliceEpisodeNumber: "",
      listCharacter: [],
    };
  },
  methods: {
    goToCharacterData(item: any) {
      this.$router
        .push({ path: "/character/" + item, params: item })
        .catch(() => {});
    },
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/episode/" + this.id)
      .then((response) => {
        this.episodeData = response.data;
        this.sliceSeason = response.data.episode.slice(2, -3);
        this.sliceEpisodeNumber = response.data.episode.slice(4);
        const list = response.data.characters.map((url: string) =>
          axios.get(url)
        );
        Promise.all(list).then((response: any) => {
          this.listCharacter = response;
        });
      });
  },
});
</script>
