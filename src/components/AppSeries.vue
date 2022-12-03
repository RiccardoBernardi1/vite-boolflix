<template>
  <section id="series">
    <h2 class="fw-bold py-3 ms-2">Serie più popolari su Boolflix</h2>
    <AppCarousel :info="store.popularSeries" num="10" />
    <h2 class="fw-bold py-3 ms-2">Serie più votate su Boolflix</h2>
    <AppCarousel :info="store.topRatedSeries" num="14" />
    <h2 class="fw-bold py-3 ms-2">Tendenze</h2>
    <AppCarousel :info="store.trendSeries" num="18" />
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
