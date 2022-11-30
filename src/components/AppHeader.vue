<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header class="px-2 py-3 d-flex justify-content-between">
    <h1>BOOLFLIX</h1>
    <form
      action=""
      class="d-flex align-items-center p-2"
      @submit.prevent="$emit('searchMovies')"
    >
      <input
        type="text"
        class="me-3 rounded-pill px-2"
        v-model="store.textInput"
      />
      <button class="rounded-pill px-2">Cerca</button>
    </form>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  h1 {
    color: darkred;
  }
}
</style>
