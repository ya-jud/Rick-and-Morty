<template>
  <div>
    <div class="d-flex justify-center">
      <div class="d-flex align-center" style="max-width: 300px">
        <v-text-field
          class="mr-5"
          v-model="nameLocation"
          label="Search"
          clearable
          @keyup.enter="locationSearchResults"
        ></v-text-field>
        <v-btn elevation="2" @click="locationSearchResults">Enter</v-btn>
      </div>
    </div>

    <v-row>
      <v-col class="col-md-4" v-for="item in locationsList" :key="item.id">
        <v-card class="ma-3" style="min-width: 300px; max-width: 350px;">
          <v-card-title>
            Name:
            <span
              class="text-decoration-underline"
              style="cursor: pointer;"
              @click="goToLocationData(item.id)"
            >
              {{ item.name }}
            </span>
            Type: {{ item.type }} <br />
            Dimension: {{ item.dimension }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  data() {
    return {
      locationsList: {},
      nameLocation: "" as String,
    };
  },
  methods: {
    locationSearchResults() {
      axios
        .get(
          "https://rickandmortyapi.com/api/location/?name=" +
            this.nameLocation.toLowerCase()
        )
        .then((response) => {
          if (response.status === 200) {
            const result = response.data.results;
            this.locationsList = result;
          }
        })
        .catch((err) => {
          this.locationsList = [
            {
              name: "Nothing was found :(",
              episode: "",
              air_date: "",
            },
          ];
        });
    },
    goToLocationData(item: any) {
      this.$router
        .push({ path: "/location/" + item, params: item })
        .catch(() => {});
    },
  },
  mounted() {
    axios.get("https://rickandmortyapi.com/api/location").then((response) => {
      this.locationsList = response.data.results;
    });
  },
});
</script>
