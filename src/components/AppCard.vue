<script>
export default {
  name: "AppCard",
  props: {
    info: Object,
  },
};
</script>

<template>
  <div class="p-3 m-2 text-center">
    <ul class="list-group">
      <li>
        <h5 class="list-group-item rounded-top mb-0">
          Titolo : <br />{{ info.title }}
        </h5>
      </li>
      <li>
        <div class="list-group-item" v-if="info.original_title != info.title">
          Titolo originale : <br />{{ info.original_title }}
        </div>
      </li>
      <li>
        <div class="list-group-item">
          Lingua originale : <br />{{ info.original_language }}
        </div>
      </li>
      <li>
        <div class="list-group-item rounded-bottom">
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
}
</style>
