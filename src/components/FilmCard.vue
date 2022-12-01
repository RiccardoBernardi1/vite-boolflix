<script>
export default {
  name: "FilmCard",
  props: {
    info: Object,
  },
  data() {
    return {
      stars: [],
      emptyStars: [],
    };
  },
  methods: {
    getFlag() {
      if (this.info.original_language === "en") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg/1200px-Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg.png";
      } else if (this.info.original_language === "it") {
        return "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg";
      } else if (this.info.original_language === "es") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png";
      } else if (this.info.original_language === "de") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png";
      } else if (this.info.original_language === "fr") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png";
      } else if (this.info.original_language === "nl") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/2560px-Flag_of_the_Netherlands.svg.png";
      } else if (this.info.original_language === "ja") {
        return "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png";
      } else if (this.info.original_language === "cs") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png";
      } else if (this.info.original_language === "pl") {
        return "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/640px-Flag_of_Poland.svg.png";
      } else if (this.info.original_language === "tl") {
        return "https://flagpedia.net/data/flags/w1600/tl.png";
      } else if (this.info.original_language === "sk") {
        return "https://flagpedia.net/data/flags/w1600/sk.png";
      } else if (this.info.original_language === "pt") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2560px-Flag_of_Portugal.svg.png";
      } else if (this.info.original_language === "sl") {
        return "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg";
      }
    },
    getVoteStars() {
      for (let i = 0; i < Math.ceil(this.info.vote_average / 2); i++) {
        this.stars.push(i);
      }
      for (let i = 0; i < 5 - Math.ceil(this.info.vote_average / 2); i++) {
        this.emptyStars.push(i);
      }
    },
  },
  created() {
    this.getVoteStars();
  },
};
</script>

<template>
  <div class="m-2 app-card">
    <div class="app-card-inner">
      <div class="app-card-front">
        <img
          :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`"
          alt="immagine film/serie"
          class="poster-img"
        />
      </div>
      <div class="app-card-back">
        <ul class="list-group">
          <li>
            <h5 class="list-group-item mb-0">
              {{ info.title }}{{ info.name }}
            </h5>
          </li>
          <li
            class="list-group-item"
            v-if="
              info.original_name != info.name ||
              info.original_title != info.title
            "
          >
            Titolo originale : {{ info.original_title }}{{ info.original_name }}
          </li>
          <li class="list-group-item">
            Lingua originale :
            <img
              :src="getFlag()"
              :alt="info.original_language"
              class="mt-1 languages"
            />
          </li>
          <li class="list-group-item" v-if="info.vote_count > 0">
            Voto :
            <i class="fa-solid fa-star gold-star" v-for="star in stars"></i>
            <i
              class="fa-regular fa-star gold-star"
              v-for="star in emptyStars"
            ></i>
          </li>
          <li class="list-group-item" v-if="info.overview.length > 0">
            Anteprima: {{ info.overview }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-card {
  background-color: transparent;
  perspective: 1000px;
  width: 18.75rem;
  height: 25.625rem;
  &:hover .app-card-inner {
    transform: rotateY(180deg);
  }
  .app-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .app-card-front,
  .app-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow-y: hidden;

    li {
      max-height: 11.5625rem;
      overflow-y: auto;
      width: 100%;
      &::-webkit-scrollbar,
      .messages::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: grey;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #b30000;
      }
      /* impostazioni scrollbar firefox */
      & {
        scrollbar-width: none;
      }
    }
  }
  .app-card-front {
    background-color: #bbb;
    color: black;
  }
  .app-card-back {
    background-color: rgba($color: #000000, $alpha: 0.8);
    color: white;
    transform: rotateY(180deg);
  }
  .app-card-front .poster-img {
    width: 100%;
    min-height: 25.875rem;
  }
  ul {
    list-style: none;
    .languages {
      max-width: 3.125rem;
    }
    li,
    h5 {
      background-color: transparent;
      border: none;
      color: white;
      max-width: 100%;
    }
    li:not(:last-child) {
      border-bottom: 0.125rem solid rgba($color: #000000, $alpha: 0.8);
    }
    .gold-star {
      color: yellow;
    }
  }
}
</style>
