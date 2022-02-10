<template>

  <section>
    <router-link to="/">icone fleche gauche</router-link>
    <div>Nouvelle conversation</div>
  </section>

  <section>
    <input type="text">
    <span>+</span>
  </section>

  <div>
    <input type="text">
    <span>send</span>
  </div>
</template>

<script>
export default {
  name: "WriteMessage"
}
</script>
