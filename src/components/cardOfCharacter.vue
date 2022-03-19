<template>
  <v-card style="cursor: pointer" class="mx-8" tile>
    <v-img
      :src="urlImg"
      height="250px"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title v-text="nameCharacter"></v-card-title>
    </v-img>
    <v-card-text>
      Status: <slot name="statusCharacter"></slot><br />
      Species: <slot name="speciesCharacter"></slot>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    urlImg: {
      type: String,
      default: "",
    },
    nameCharacter: {
      type: String,
      default: "",
    },
  },
});
</script>
