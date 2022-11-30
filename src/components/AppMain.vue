<script>
import { store } from "../store";
import FilmCard from "./FilmCard.vue";
import TvCard from "./TvCard.vue";
export default {
  name: "AppMain",
  components: {
    FilmCard,
    TvCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main class="row justify-content-around">
    <h2 v-if="store.movies.length > 0" class="text-center">Film</h2>
    <FilmCard :info="movie" v-for="movie in store.movies" class="app-card" />
    <h2 v-if="store.series.length > 0" class="text-center">Serie</h2>
    <TvCard :info="series" v-for="series in store.series" class="app-card" />
  </main>
</template>

<style lang="scss" scoped>
.app-card {
  max-width: 18.75rem;
}
</style>
