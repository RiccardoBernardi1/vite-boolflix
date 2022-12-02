<template>
  <h2 class="fw-bold pt-3 ms-4">I più popolari su Boolflix</h2>
  <div class="wrapper">
    <section id="section1">
      <a href="#section3" class="arrow__btn">‹</a>
      <div class="item" v-for="n in 4">
        <img
          :src="`https://image.tmdb.org/t/p/w342${store.popularMoviesAndSeries[n]?.poster_path}`"
          :alt="store.popularMoviesAndSeries[n]?.title"
        />
      </div>
      <a href="#section2" class="arrow__btn">›</a>
    </section>
    <section id="section2">
      <a href="#section1" class="arrow__btn">‹</a>
      <div class="item" v-for="n in 4">
        <img
          :src="`https://image.tmdb.org/t/p/w342${
            store.popularMoviesAndSeries[n + 4]?.poster_path
          }`"
          :alt="store.popularMoviesAndSeries[n + 4]?.title"
        />
      </div>
      <a href="#section3" class="arrow__btn">›</a>
    </section>
    <section id="section3">
      <a href="#section2" class="arrow__btn">‹</a>
      <div class="item" v-for="n in 4">
        <img
          :src="`https://image.tmdb.org/t/p/w342${
            store.popularMoviesAndSeries[n + 8]?.poster_path
          }`"
          :alt="store.popularMoviesAndSeries[n + 8]?.title"
        />
      </div>
      <a href="#section4" class="arrow__btn">›</a>
    </section>
    <section id="section4">
      <a href="#section3" class="arrow__btn">‹</a>
      <div class="item" v-for="n in 4">
        <img
          :src="`https://image.tmdb.org/t/p/w342${
            store.popularMoviesAndSeries[n + 12]?.poster_path
          }`"
          :alt="store.popularMoviesAndSeries[n + 12]?.title"
        />
      </div>
      <a href="#section1" class="arrow__btn">›</a>
    </section>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "AppCarousel",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
$itemGrow: 1.2;
$duration: 250ms;

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background-color: #000;
}

h2 {
  color: #fff;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 100%);
  overflow: hidden;
  scroll-behavior: smooth;

  section {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin: 20px 0;

    .item {
      padding: 0 2px;
      transition: $duration all;

      &:hover {
        margin: 0 40px;
        transform: scale(1.2);
      }
    }

    a {
      position: absolute;
      color: #fff;
      text-decoration: none;
      font-size: 6em;
      background: rgb(0, 0, 0);
      width: 80px;
      padding: 20px;
      text-align: center;
      z-index: 1;
      line-height: 473px;

      &:nth-of-type(1) {
        top: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(
          -90deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 100%
        );
      }
      &:nth-of-type(2) {
        top: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 100%
        );
      }
    }
  }
}

// Remove the arrow for Mobile
@media only screen and (max-width: 600px) {
  a.arrow__btn {
    display: none;
  }
}
</style>
