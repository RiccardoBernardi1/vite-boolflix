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
  <header class="px-2 py-3">
    <div
      class="container-fluid d-flex justify-content-between align-items-center"
    >
      <h1>BOOLFLIX</h1>
      <nav>
        <a
          href="#home"
          @click="
            (store.standardCall = true),
              (store.seriesPage = false),
              (this.store.search = false),
              (this.store.moviesPage = false)
          "
          class="px-4 fw-bold"
          >HOME</a
        >
        <a
          href="#series"
          @click="
            (store.standardCall = false),
              (store.seriesPage = true),
              (this.store.search = false),
              (this.store.moviesPage = false)
          "
          class="px-4 fw-bold"
          >SERIE</a
        >
        <a
          href="#films"
          @click="
            (store.standardCall = false),
              (store.seriesPage = false),
              (this.store.search = false),
              (this.store.moviesPage = true)
          "
          class="px-4 fw-bold"
          >FILM</a
        >
      </nav>
      <form
        action=""
        class="d-flex align-items-center p-2"
        @submit.prevent="$emit('searchMovies')"
      >
        <input
          type="text"
          class="me-3 rounded-pill px-2"
          v-model="store.textInput"
          required
          placeholder="Cerca serie o film"
        />
        <button class="rounded-pill px-3 py-1 fw-bold">Cerca</button>
      </form>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  h1 {
    color: darkred;
  }
  a {
    text-decoration: none;
    color: white;
    transition: all 0.5s;
    &:hover {
      scale: 1.1;
      margin: 0 1.25rem;
      font-size: 1.5rem;
    }
  }
  input {
    outline: none;
  }
  button {
    background-color: darkred;
    color: white;
    border: none;

    transition: scale 0.5s;
    &:hover {
      scale: 1.1;
    }
    &:active {
      scale: 0.9;
    }
  }
}
</style>
