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
    },
    getPopularMoviesAndSeries() {
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
          axios
            .get("https://api.themoviedb.org/3/tv/popular", {
              params: {
                api_key: "51b431a1c8f87df48585c99376339b80",
                language: "it-IT",
              },
            })
            .then((resp) => {
              this.store.series = resp.data.results;
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
                this.store.popularMoviesAndSeries.push(elm);
                if (index < shorterList.length) {
                  this.store.popularMoviesAndSeries.push(shorterList[index]);
                }
              });
            })
            .catch((err) => {
              this.store.series = [];
            });
        })
        .catch((err) => {
          this.store.movies = [];
        });
    },
    getTopRated() {
      axios
        .get("https://api.themoviedb.org/3/movie/top_rated", {
          params: {
            api_key: "51b431a1c8f87df48585c99376339b80",
            language: "it-IT",
          },
        })
        .then((resp) => {
          this.store.movies = resp.data.results.filter(
            (movie) => movie.adult === false
          );
          axios
            .get("https://api.themoviedb.org/3/tv/top_rated", {
              params: {
                api_key: "51b431a1c8f87df48585c99376339b80",
                language: "it-IT",
              },
            })
            .then((resp) => {
              this.store.series = resp.data.results;
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
                this.store.topRated.push(elm);
                if (index < shorterList.length) {
                  this.store.topRated.push(shorterList[index]);
                }
              });
            })
            .catch((err) => {
              this.store.series = [];
            });
        })
        .catch((err) => {
          this.store.movies = [];
        });
    },
    getTrend() {
      axios
        .get("https://api.themoviedb.org/3/trending/all/day", {
          params: {
            api_key: "51b431a1c8f87df48585c99376339b80",
            language: "it-IT",
          },
        })
        .then((resp) => {
          console.log(resp.data);
          this.store.trend = resp.data.results.filter(
            (movie) => movie.adult === false
          );
        })
        .catch((err) => {
          this.store.trend = [];
        });
    },
    getgenres() {
      axios
        .get("https://api.themoviedb.org/3/genre/movie/list", {
          params: {
            api_key: "51b431a1c8f87df48585c99376339b80",
            language: "it-IT",
          },
        })
        .then((resp) => {
          console.log(resp.data.genres);
          const allFilms = this.store.trend.concat(
            this.store.topRated,
            this.store.popularMoviesAndSeries
          );
          console.log(allFilms, "all");
          this.store.animation = allFilms.filter((elm) =>
            elm.genre_ids.includes(resp.data.genres[2].id)
          );
          console.log(this.store.animation, "anima");
          this.store.comedy = allFilms.filter((elm) =>
            elm.genre_ids.includes(resp.data.genres[3].id)
          );
          console.log(this.store.comedy, "come");
        });
    },
  },
  created() {
    this.store.standardCall = true;
    this.getPopularMoviesAndSeries();
    this.getTopRated();
    this.getTrend();
    this.getgenres();
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
  background-color: black;
}
</style>
