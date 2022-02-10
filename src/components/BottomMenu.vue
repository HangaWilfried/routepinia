<template>
  <section class="py-2 flex flex-col">
    <!--le clique sur ce boutton mene vers l'edition d'un nouveau message-->
    <router-link to="/write-message" class="place-self-end bg-blue-400 rounded-full flex flex-col items-center justify-center p-2 w-16 h-16">
      <ChatAltIcon class="w-10 fill-white stroke-blue-400 mt-2"/>
    </router-link>
    <article class="p-7 bg-gray-300 flex justify-between mt-10 mb-2 relative">
      <div>
        <router-link to="/">Discussions</router-link>
<!--        <span>nombres de discussions dans la liste.</span>-->
        <span class="absolute top-3 left-28 w-7 h-7 bg-blue-500 rounded-full text-white font-bold text-center leading-5 flex flex-col justify-center">10</span>
      </div>
      <div>
        <router-link to="/contact">Contacts</router-link>
      </div>
    </article>
  </section>
</template>

<script>
import {ChatAltIcon} from "@heroicons/vue/outline"


export default {
  name: "BottomMenu",
  components: {ChatAltIcon}
}
</script>
