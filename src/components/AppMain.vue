<script>
import { store } from "../store";
import FilmCard from "./FilmCard.vue";
import AppCarousel from "./AppCarousel.vue";
export default {
  name: "AppMain",
  components: {
    FilmCard,
    AppCarousel,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main class="container-fluid">
    <div class="row justify-content-around">
      <AppCarousel v-if="store.standardCall" />
      <div v-else class="row justify-content-around">
        <h2 v-if="store.movies.length > 0" class="text-center">Film</h2>
        <FilmCard :info="movie" v-for="movie in store.movies" />
        <h2 v-if="store.series.length > 0" class="text-center">Serie</h2>
        <FilmCard :info="series" v-for="series in store.series" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
