<template>
  <div class="wrapper">
    <section :id="`section${num}`">
      <a :href="`#section${num + 3}`" class="arrow__btn">‹</a>
      <div class="item" v-for="n in 4">
        <img
          :src="`https://image.tmdb.org/t/p/w342${info[n]?.poster_path}`"
          :alt="info[n]?.title"
          v-if="info[n]?.poster_path != null"
        />
        <img
          :src="`https://via.placeholder.com/342x485/000?text=${info[n].title}`"
          :alt="info[n]?.title"
          v-else
        />
      </div>
      <a :href="`#section${num + 1}`" class="arrow__btn">›</a>
    </section>
    <section :id="`section${num + 1}`">
      <a :href="`#section${num}`" class="arrow__btn">‹</a>
      <div class="item" v-for="n in 4">
        <img
          :src="`https://image.tmdb.org/t/p/w342${info[n + 4]?.poster_path}`"
          :alt="info[n + 4]?.title"
          v-if="info[n + 4]?.poster_path != null"
        />
        <img
          :src="`https://via.placeholder.com/342x485/000?text=${
            info[n + 4].title
          }`"
          :alt="info[n + 4]?.title"
          v-else
        />
      </div>
      <a :href="`#section${num + 2}`" class="arrow__btn">›</a>
    </section>
    <section :id="`section${num + 2}`">
      <a :href="`#section${num + 1}`" class="arrow__btn">‹</a>
      <div class="item" v-for="n in 4">
        <img
          :src="`https://image.tmdb.org/t/p/w342${info[n + 8]?.poster_path}`"
          :alt="info[n + 8]?.title"
          v-if="info[n + 8]?.poster_path != null"
        />
        <img
          :src="`https://via.placeholder.com/342x485/000?text=${
            info[n + 8].title
          }`"
          :alt="info[n + 8]?.title"
          v-else
        />
      </div>
      <a :href="`#section${num + 3}`" class="arrow__btn">›</a>
    </section>
    <section :id="`section${num + 3}`">
      <a :href="`#section${num + 2}`" class="arrow__btn">‹</a>
      <div class="item" v-for="n in 4">
        <img
          :src="`https://image.tmdb.org/t/p/w342${info[n + 12]?.poster_path}`"
          :alt="info[n + 12]?.title"
          v-if="info[n + 12]?.poster_path != null"
        />
        <img
          :src="`https://via.placeholder.com/342x485/000?text=${
            info[n + 12].name
          }`"
          :alt="info[n + 12]?.name"
          v-else
        />
      </div>
      <a :href="`#section${num}`" class="arrow__btn">›</a>
    </section>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "AppCarousel",
  props: {
    info: Object,
    num: Number,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    vote() {
      return Math.ceil(this.info.vote_average / 2);
    },
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
  height: 37.5rem;
  section {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin: 20px 0;

    .item {
      position: relative;
      padding: 0 2px;
      transition: $duration all;

      &:hover {
        margin: 0 40px;
        transform: scale(1.2);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
      .card-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.8);
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
