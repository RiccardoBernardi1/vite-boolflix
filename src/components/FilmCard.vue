<script>
export default {
  name: "FilmCard",
  props: {
    info: Object,
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
  },
};
</script>

<template>
  <div class="p-3 m-2 text-center">
    <ul class="list-group">
      <li>
        <img
          :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`"
          alt="immagine film/serie"
          class="img-fluid"
        />
      </li>
      <li>
        <h5 class="list-group-item list-group-item-warning rounded-top mb-0">
          {{ info.title }}
        </h5>
      </li>
      <li>
        <div
          class="list-group-item list-group-item-warning"
          v-if="info.original_title != info.title"
        >
          Titolo originale : <br />{{ info.original_title }}
        </div>
      </li>
      <li>
        <div class="list-group-item list-group-item-warning">
          Lingua originale : <br /><img
            :src="getFlag()"
            :alt="info.original_language"
            class="mt-1 languages"
          />
        </div>
      </li>
      <li>
        <div class="list-group-item rounded-bottom list-group-item-warning">
          Voto : <br />
          {{ info.vote_average }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  .languages {
    max-width: 3.125rem;
  }
}
</style>
