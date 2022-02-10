<template>
  <HeaderMessage/>
  <NewMessage/>
  <div>
    <router-view/>
  </div>
  <BottomMenu/>
</template>

<script>
  import BottomMenu from "../components/BottomMenu.vue";
  import HeaderMessage from "../components/HeaderMessage.vue";
  import NewMessage from "../components/NewMessage.vue";

  export default {
    name: "WelcomeMessageApp",
    components: {
      BottomMenu, HeaderMessage, NewMessage
    }
  }
</script>
