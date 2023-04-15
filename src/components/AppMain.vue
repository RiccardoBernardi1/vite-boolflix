<script>
import { store } from "../store";
import { Offcanvas } from "bootstrap";
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
  methods: {
    vote() {
      console.log(
        Math.ceil(this.store.clickedCard.vote_average / 2),
        "aaaaaaaa"
      );
      return Math.ceil(this.store.clickedCard.vote_average / 2);
    },
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
        <FilmCard :info="movie" v-for="movie in store.movies" />
        <FilmCard :info="series" v-for="series in store.series" />
      </div>
    </div>
    <AppSeries v-if="store.seriesPage && store.popularSeries.length > 0" />
    <AppFilms v-if="store.moviesPage && store.popularMovies.length > 0" />
  </main>
  <div
    class="offcanvas offcanvas-start text-bg-dark"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h2 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">
        {{ store.clickedCard.title || store.clickedCard.name }}
      </h2>
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <img
        :src="`https://image.tmdb.org/t/p/w500${store.clickedCard.poster_path}`"
        :alt="store.clickedCard.title || store.clickedCard.name"
      />
      <video :src="`https://www.youtube.com/watch?v=${store.trailer}`"></video>
      <div
        class="mt-3"
        v-if="store.clickedCard != '' && store.clickedCard.overview.length > 0"
      >
        <h6 class="fw-bold">Anteprima</h6>
        {{ store.clickedCard.overview }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
main {
  color: white;
}
.offcanvas-body {
  &::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
  /* impostazioni scrollbar firefox */
  & {
    scrollbar-width: none;
  }
  img {
    max-width: 100%;
  }
}
</style>
