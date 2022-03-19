<template>
  <div >
    <v-toolbar color="#3949AB" dark dense flat>
      <v-container class="d-flex justify-space-between align-center">
        <v-card-title primary-title>
          Rick and Morty
        </v-card-title>
        <v-app-bar-nav-icon @click="drawer = true">
          <v-icon size="40">mdi-menu</v-icon>
        </v-app-bar-nav-icon>
      </v-container>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in navigation" :key="item.index" @click="item.goTo">
            <v-list-item-title class="text-sm-h5 text-xs-h5">{{
              item.name
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
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
