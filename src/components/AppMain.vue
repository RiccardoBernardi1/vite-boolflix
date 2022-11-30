<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
  name: "AppMain",
  components: {
    AppCard,
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
    <AppCard :info="movie" v-for="movie in store.movies" class="app-card" />
  </main>
</template>

<style lang="scss" scoped>
.app-card {
  max-width: 18.75rem;
}
</style>
