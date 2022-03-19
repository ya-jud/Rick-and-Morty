<template>
  <div>
    <v-card v-if="!isMobile" class="d-flex mx-10 my-2 px-5 py-2" flat outlined>
      <v-list-item-title>
        <slot name="episodeName"></slot>
      </v-list-item-title>
      <v-list-item-title>
        <span>Episode</span><slot name="episodeNumber"></slot>
        <span>Season</span><slot name="seasonNumber"></slot>
      </v-list-item-title>
      <v-list-item-subtitle class="d-flex justify-end">
        <slot name="episodeDate"></slot>
      </v-list-item-subtitle>
    </v-card>
    <v-expansion-panels v-if="isMobile" class="my-2">
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-list-item dense class="text-decoration-underline text-h5" >
            <slot name="episodeName"></slot>
          </v-list-item>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list-item-title>
            <span>Season</span><slot name="seasonNumber"></slot>
            <span>Episode</span><slot name="episodeNumber"></slot>
          </v-list-item-title>
          <v-list-item-subtitle class="pl-4">
            <slot name="episodeDate"></slot>
          </v-list-item-subtitle>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
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
});
</script>
