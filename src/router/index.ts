import Vue from "vue";
import VueRouter from "vue-router";
import episodesList from "../views/EpisodesList.vue";
import charactersList from "../views/CharactersList.vue";
import locationsList from "../views/LocationsList.vue";
import episode from "../views/Episode.vue";
import character from "../views/Character.vue";
import location from "../views/Location.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/episodeList",
  },
  {
    path: "/episodeList",
    name: "episodeList",
    component: episodesList,
  },
  {
    path: "/episode/:id",
    name: "episode",
    component: episode,
    props: true,
  },
  {
    path: "/charactersList",
    name: "charactersList",
    component: charactersList,
  },
  {
    path: "/character/:id",
    name: "character",
    component: character,
    props: true,
  },
  {
    path: "/locationsList",
    name: "locationsList",
    component: locationsList,
  },
  {
    path: "/location/:id",
    name: "location",
    component: location,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
