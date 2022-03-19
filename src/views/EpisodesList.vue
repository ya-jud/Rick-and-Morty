<template>
  <div>
    <v-card-actions class="d-flex justify-space-between mx-10 px-5">
      <div v-if="!isMobile">Episode</div>

      <div class="text-center">
        <div class="d-flex align-center">
          <v-text-field
            class="mr-5"
            v-model="nameEpisode"
            label="Search"
            clearable
            @keyup.enter="episodeSearchResults"
          ></v-text-field>
          <v-btn elevation="2" @click="episodeSearchResults">Enter</v-btn>
        </div>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Season
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              style="cursor: pointer"
              class="d-flex justify-center"
              v-for="item in seasonsList"
              :key="item.index"
              @click="groupSeasons(item.season)"
            >
              <v-btn-toggle>{{ item.season }}</v-btn-toggle>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div v-if="!isMobile">Date</div>
    </v-card-actions>

    <episodeItem v-for="item in episodeList" :key="item.index">
      <span
        slot="episodeName"
        style="cursor: pointer"
        @click="goToEpisodeData(item)"
      >
        <v-card flat>
          {{ item.name }}
        </v-card>
      </span>
      <span slot="seasonNumber">
        {{ item.episode.slice(2, -3) }}
      </span>
      <span slot="episodeNumber">
        {{ item.episode.slice(4) }}
      </span>
      <span slot="episodeDate">
        {{ item.air_date }}
      </span>
    </episodeItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import episodeItem from "../components/EpisodeItem.vue";

export default Vue.extend({
  components: {
    episodeItem,
  },
  data() {
    return {
      episodeList: {},
      seasonsList: [
        { season: "1" },
        { season: "2" },
        { season: "3" },
        { season: "4" },
      ],
      season: "1" as String,
      nameEpisode: "" as String,
    };
  },
  methods: {
    getData(season: String) {
      axios
        .get("https://rickandmortyapi.com/api/episode/?episode=S0" + season)
        .then((response) => {
          const result = response.data.results;
          this.episodeList = result;
        });
    },
    goToEpisodeData(item: any) {
      this.$router
        .push({ path: "/episode/" + item.id, params: item.id })
        .catch(() => {});
    },
    groupSeasons(list: String) {
      this.getData(list);
    },
    episodeSearchResults() {
      axios
        .get(
          "https://rickandmortyapi.com/api/episode/?name=" +
            this.nameEpisode.toLowerCase()
        )
        .then((response) => {
          if (response.status === 200) {
            const result = response.data.results;
            this.episodeList = result;
          }
        })
        .catch((err) => {
          this.episodeList = [
            {
              name: "Nothing was found :(",
              episode: "",
              air_date: "",
            },
          ];
        });
    },
  },
  computed: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.getData(this.season);
  },
});
</script>
