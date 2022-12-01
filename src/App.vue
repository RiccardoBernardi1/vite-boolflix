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
    getMoviesAndSeries() {
      if (this.store.textInput.length > 0) {
        axios
          .get("https://api.themoviedb.org/3/search/movie", {
            params: {
              api_key: "51b431a1c8f87df48585c99376339b80",
              language: "it-IT",
              query: this.store.textInput,
            },
          })
          .then((resp) => {
            this.store.movies = resp.data.results.filter(
              (movie) => movie.adult === false
            );
            this.store.standardCall = false;
          })
          .catch((err) => {
            this.store.movies = [];
          });
        axios
          .get("https://api.themoviedb.org/3/search/tv", {
            params: {
              api_key: "51b431a1c8f87df48585c99376339b80",
              language: "it-IT",
              query: this.store.textInput,
            },
          })
          .then((resp) => {
            this.store.series = resp.data.results;
            this.store.standardCall = false;
          })
          .catch((err) => {
            this.store.movies = [];
          });
      } else {
        axios
          .get("https://api.themoviedb.org/3/movie/popular", {
            params: {
              api_key: "51b431a1c8f87df48585c99376339b80",
              language: "it-IT",
            },
          })
          .then((resp) => {
            this.store.movies = resp.data.results.filter(
              (movie) => movie.adult === false
            );
          })
          .catch((err) => {
            this.store.movies = [];
          });
        axios
          .get("https://api.themoviedb.org/3/tv/popular", {
            params: {
              api_key: "51b431a1c8f87df48585c99376339b80",
              language: "it-IT",
            },
          })
          .then((resp) => {
            this.store.series = resp.data.results;
          })
          .catch((err) => {
            this.store.series = [];
          });
        let longerList = [];
        let shorterList = [];
        if (this.store.movies.length >= this.store.series.length) {
          longerList = this.store.movies;
          shorterList = this.store.series;
        } else {
          longerList = this.store.series;
          shorterList = this.store.movies;
        }
        longerList.forEach((elm, index) => {
          this.store.moviesAndSeries.push(elm);
          if (index < shorterList.length) {
            this.store.moviesAndSeries.push(shorterList[index]);
          }
          console.log(this.store.moviesAndSeries);
        });
      }
    },
  },
  created() {
    this.getMoviesAndSeries();
  },
};
</script>

<template>
  <AppHeader @searchMovies="getMoviesAndSeries" />
  <AppMain />
</template>

<style lang="scss">
@import "./style/global.scss";
body {
  background-color: darkgray;
  overflow-x: hidden;
}
</style>
