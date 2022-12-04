import { reactive } from "vue";

export const store = reactive({
  textInput: "",
  movies: [],
  series: [],
  moviesAndSeries: [],
  popularMoviesAndSeries: [],
  popularMovies: [],
  popularSeries: [],
  topRated: [],
  topRatedSeries: [],
  topRatedMovies: [],
  genres: [],
  trend: [],
  trendSeries: [],
  trendMovies: [],
  animation: [],
  comedy: [],
  moviesPage: false,
  standardCall: true,
  search: false,
  clickedCard: "",
});
