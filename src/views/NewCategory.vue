<template>
  <HeaderMessage/>
  <section>
    <div>
      <p>
        <span>+</span>
        <span>Ajouter une cat&eacute;gorie</span>
      </p>
      <p>
        <span> Organisez vos conversations professionnelles,</span>
        <span>vos factures et plus en cat&eacute;gories afin de pouvoir</span>
        <span>les retrouver facilement.</span>
      </p>
    </div>
  </section>
  <BottomMenu/>
</template>

<script>
import BottomMenu from "../components/BottomMenu.vue";
import HeaderMessage from "../components/HeaderMessage.vue";
import NewMessage from "../components/NewMessage.vue";

export default {
  name: "NewCategory",
  components: {
    BottomMenu, HeaderMessage, NewMessage
  }
}
</script>
