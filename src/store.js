import { reactive } from "vue";

export const store = reactive({
  textInput: "",
  movies: [],
  series: [],
  moviesAndSeries: [],
  popularMoviesAndSeries: [],
  topRated: [],
  genres: [],
  trend: [],
  animation: [],
  comedy: [],
  standardCall: true,
});
