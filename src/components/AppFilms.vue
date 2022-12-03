<template>
  <section id="film">
    <h2 class="fw-bold py-3 ms-2">Film più popolari su Boolflix</h2>
    <AppCarousel :info="store.popularMovies" num="19" />
    <h2 class="fw-bold py-3 ms-2">Film più votate su Boolflix</h2>
    <AppCarousel :info="store.topRatedMovies" num="23" />
    <h2 class="fw-bold py-3 ms-2">Tendenze</h2>
    <AppCarousel :info="store.trendMovies" num="27" />
  </section>
</template>

<script>
import { store } from "../store";
import AppCarousel from "./AppCarousel.vue";
export default {
  name: "AppSection",
  data() {
    return {
      store,
    };
  },
  components: {
    AppCarousel,
  },
};
</script>

<style lang="scss" scoped></style>
