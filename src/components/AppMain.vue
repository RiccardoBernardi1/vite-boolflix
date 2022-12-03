<script>
import { store } from "../store";
import FilmCard from "./FilmCard.vue";
import AppCarousel from "./AppCarousel.vue";
import AppSeries from "./AppSeries.vue";
import AppFilms from "./AppFilms.vue";
export default {
  name: "AppMain",
  components: {
    FilmCard,
    AppCarousel,
    AppSeries,
    AppFilms,
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
    <div id="home" v-show="store.standardCall">
      <h2 class="fw-bold py-3 ms-2">I più popolari su Boolflix</h2>
      <AppCarousel :info="store.popularMoviesAndSeries" num="1" />
      <h2 class="fw-bold py-3 ms-2">I più votati su Boolflix</h2>
      <AppCarousel :info="store.topRated" num="5" />
      <h2 class="fw-bold py-3 ms-2">Tendenze</h2>
      <AppCarousel :info="store.trend" num="9" />
    </div>
    <div class="row justify-content-around" v-show="store.search">
      <div class="row justify-content-around">
        <h2 v-if="store.movies.length > 0" class="text-center">Film</h2>
        <FilmCard :info="movie" v-for="movie in store.movies" />
        <h2 v-if="store.series.length > 0" class="text-center">Serie</h2>
        <FilmCard :info="series" v-for="series in store.series" />
      </div>
    </div>
    <AppSeries v-if="store.seriesPage && store.popularSeries.length > 0" />
    <AppFilms v-if="store.moviesPage && store.popularMovies.length > 0" />
  </main>
</template>

<style lang="scss" scoped>
main {
  color: white;
}
</style>
