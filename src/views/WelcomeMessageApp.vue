<template>
  <div class="opacity-75 bg-gradient-to-r from-pink-400 to-yellow-300 flex flex-col items-start bg-zinc-100 absolute w-full h-full px-5 py-10 inset-0">
    <HeaderMessage />
      <router-view/>
    <BottomMenu/>
  </div>
</template>

<script>
  import BottomMenu from "../components/BottomMenu.vue";
  import HeaderMessage from "../components/HeaderMessage.vue";
  import NewMessage from "./NewMessage.vue";

  export default {
    name: "WelcomeMessageApp",
    components: {
      NewMessage,
      HeaderMessage,
      BottomMenu
    }
  }
</script>
