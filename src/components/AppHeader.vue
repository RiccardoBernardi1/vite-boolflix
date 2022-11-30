<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header class="px-2 py-3 d-flex justify-content-between">
    <h1>BOOLFLIX</h1>
    <form action="" class="d-flex align-items-center p-2" @submit.prevent>
      <input type="text" class="me-3 rounded-pill" />
      <button class="rounded-pill">Cerca</button>
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
