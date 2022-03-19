<template>
  <div>
    <div class="d-flex justify-center">
      <div class="text-center" flat>
        <div class="d-flex align-center" style="max-width: 300px;">
          <v-text-field
            class="mr-5"
            v-model="characterName"
            label="Search"
            clearable
            @keyup.enter="characterSearchResults"
          ></v-text-field>
          <v-btn elevation="2" @click="characterSearchResults">Enter</v-btn>
        </div>
        <div class="ma-5">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Filter by status
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                style="cursor: pointer"
                class="d-flex justify-center"
                v-for="item in statusList"
                :key="item.index"
                @click="filterByStatus(item.status)"
              >
                <v-btn-toggle>{{ item.status }}</v-btn-toggle>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
    <v-row>
      <v-col
        class="col-md-3"
        v-for="item in charactersList"
        :key="item.id"
        @click="goToCharacterData(item)"
      >
        <card-of-character :urlImg="item.image" :nameCharacter="item.name">
          <span slot="statusCharacter">{{ item.status }}</span>
          <span slot="speciesCharacter">{{ item.species }}</span>
        </card-of-character>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import cardOfCharacter from "../components/cardOfCharacter.vue";
export default Vue.extend({
  components: {
    cardOfCharacter,
  },
  data() {
    return {
      charactersList: {},
      characterName: "",
      statusList: [
        { status: "alive" },
        { status: "dead" },
        { status: "unknow" },
      ],
    };
  },
  methods: {
    getData(status: "") {
      axios
        .get("https://rickandmortyapi.com/api/character/?status=" + status)
        .then((response) => {
          this.charactersList = response.data.results;
        });
    },
    goToCharacterData(item: any) {
      this.$router
        .push({ path: "/character/" + item.id, params: item.id })
        .catch(() => {});
    },
    characterSearchResults() {
      axios
        .get(
          "https://rickandmortyapi.com/api/character/?name=" +
            this.characterName.toLowerCase()
        )
        .then((response) => {
          if (response.status === 200) {
            const result = response.data.results;
            this.charactersList = result;
          }
        })
        .catch((err) => {
          this.charactersList = [
            {
              name: "Nothing was found :(",
              episode: "",
              air_date: "",
            },
          ];
        });
    },
    filterByStatus(status: "", name: "") {
      axios
        .get(
          "https://rickandmortyapi.com/api/character/?status=" +
            status +
            "&name=" +
            this.characterName.toLowerCase()
        )
        .then((response) => {
          this.charactersList = response.data.results;
        });
    },
  },
  mounted() {
    this.getData("");
  },
});
</script>
