<template>
  <v-toolbar color="#3949AB" dark dense flat>
    <v-card-text class="text-md-h5 text-sm-h6">
      Rick and Morty
    </v-card-text>
    <v-tabs class="d-flex justify-end mr-4">
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab
        class="text-md-h6 text-sm-h6"
        v-for="item in navigation"
        :key="item.index"
        @click="item.goTo"
      >
        {{ item.name }}
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  methods: {},
  computed: {
    navigation: {
      get() {
        return [
          {
            name: "episode",
            goTo: () => {
              this.$router.push({ path: "/episodeList" }).catch(() => {});
            },
          },
          {
            name: "characters",
            goTo: () => {
              this.$router.push({ path: "/charactersList" }).catch(() => {});
            },
          },
          {
            name: "locations",
            goTo: () => {
              this.$router.push({ path: "/locationsList" }).catch(() => {});
            },
          },
        ];
      },
    },
  },
});
</script>
