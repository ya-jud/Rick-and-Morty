<template>
  <div>
    <div class="d-flex justify-center">
      <v-card class="text-center" flat>
        <v-card-title>Location: {{ dataOfLocation.name }}</v-card-title>
        <v-card-text>
          Type: {{ dataOfLocation.type }} <br />
          Dimension: {{ dataOfLocation.dimension }}
        </v-card-text>
      </v-card>
    </div>
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
  </div>
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
      dataOfLocation: {},
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
      .get("https://rickandmortyapi.com/api/location/" + this.id)
      .then((response) => {
        this.dataOfLocation = response.data;
        const list = response.data.residents.map((url: string) =>
          axios.get(url)
        );
        Promise.all(list).then((response: any) => {
          this.listCharacter = response;
        });
      });
  },
});
</script>
