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
  <header class="px-1 py-3" v-if="store.popularMoviesAndSeries.length > 0">
    <div
      class="container-fluid d-flex justify-content-between align-items-center flex-wrap"
    >
      <h1>BOOLFLIX</h1>
      <nav class="my-3">
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
        class="d-flex align-items-center justify-content-end p-2"
        @submit.prevent="$emit('searchMovies')"
      >
        <input
          type="text"
          class="me-2 rounded-pill px-2"
          v-model="store.textInput"
          required
          placeholder="Cerca serie o film"
        />
        <button
          class="rounded-pill px-3 py-1 fw-bold d-flex align-items-center"
        >
          Cerca
        </button>
      </form>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;

  h1 {
    color: darkred;
    @include media-breakpoint-down(md) {
      width: 50%;
    }
  }
  nav {
    margin-left: auto;
    margin-right: auto;
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
    @include media-breakpoint-down(md) {
      order: 2;
    }
  }

  form {
    @include media-breakpoint-down(md) {
      width: 50%;
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
}
</style>
