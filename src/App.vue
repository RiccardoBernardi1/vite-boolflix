<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getMovies() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "51b431a1c8f87df48585c99376339b80",
            language: "it-IT",
            query: this.store.textInput,
          },
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
          console.log(resp.data);
          console.log(this.store.movies);
        })
        .catch((err) => {
          this.store.movies = [];
        });
    },
  },
  created() {},
};
</script>

<template>
  <AppHeader @searchMovies="getMovies" />
  <AppMain />
</template>

<style lang="scss">
@import "./style/global.scss";
body {
  background-color: darkgray;
}
</style>
