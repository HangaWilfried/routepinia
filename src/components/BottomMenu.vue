<template>
  <section class="py-2 flex flex-col w-full">
    <router-link to="/write-message" class="bg-blue-400 place-self-end rounded-full flex flex-col items-center justify-center p-2 w-20 h-20">
      <ChatAltIcon class="fill-white text-blue-400 mt-2"/>
    </router-link>
    <article class="p-7 bg-zinc-100 flex justify-between mt-10 mb-2 relative">
      <div>
        <router-link to="/all-message" :class="{
          'text-indigo-600 font-bold': !hasLinkChange,
          'text-gray-900': hasLinkChange
        }" @click="hasLinkChange=false">Discussions</router-link>
        <span class="absolute top-3 left-28 w-7 h-7 rounded-full text-white font-bold text-center leading-5 flex flex-col justify-center"
        :class="{
           'bg-indigo-600': !hasLinkChange,
          'bg-gray-900': hasLinkChange
        }">10</span>
      </div>
      <div>
        <router-link to="/contact" :class="{
          'text-indigo-600 font-bold': hasLinkChange,
          'text-gray-900': !hasLinkChange
        }" @click="hasLinkChange=true">Contacts</router-link>
      </div>
    </article>
  </section>
</template>

<script>
import {ChatAltIcon} from "@heroicons/vue/outline"
import {ref} from "vue";

export default {
  name: "BottomMenu",
  components: {ChatAltIcon},
  setup(){
    const hasLinkChange = ref(false)

    return{
      hasLinkChange
    }
  }
}
</script>
