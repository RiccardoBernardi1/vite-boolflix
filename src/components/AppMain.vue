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
    <div v-if="store.standardCall">
      <h2 class="fw-bold pt-3 ms-2">I più popolari su Boolflix</h2>
      <AppCarousel :info="store.popularMoviesAndSeries" num="1" />
      <h2 class="fw-bold pt-3 ms-2">I più votati su Boolflix</h2>
      <AppCarousel :info="store.topRated" num="5" />
    </div>
    <div class="row justify-content-around" v-else>
      <div class="row justify-content-around">
        <h2 v-if="store.movies.length > 0" class="text-center">Film</h2>
        <FilmCard :info="movie" v-for="movie in store.movies" />
        <h2 v-if="store.series.length > 0" class="text-center">Serie</h2>
        <FilmCard :info="series" v-for="series in store.series" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  color: white;
}
</style>
