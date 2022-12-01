<script>
import { store } from "../store";
import FilmCard from "./FilmCard.vue";
export default {
  name: "AppMain",
  components: {
    FilmCard,
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
    <FilmCard :info="movie" v-for="movie in store.movies" />
    <h2 v-if="store.series.length > 0" class="text-center">Serie</h2>
    <FilmCard :info="series" v-for="series in store.series" />
  </main>
</template>

<style lang="scss" scoped>
.app-card {
  max-width: 18.75rem;
}
</style>
