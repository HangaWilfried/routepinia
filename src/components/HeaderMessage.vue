<template>
  <!--si le scroll se fait vers le haut-->
<!--  <section class="flex flex-col p-4 space-y-10 bg-zinc-100">-->
<!--    <div class="flex justify-between">-->
<!--      <h2 class="text-3xl font-sans">Messages</h2>-->
<!--      <h2 class="flex space-x-5 items-center">-->
<!--        <SearchIcon class="w-7 h-7 stroke-gray-600 stroke-4"/>-->
<!--        <DotsVerticalIcon @click="changeState" class="w-7 h-7 stroke-gray-600 stroke-4"/>-->
<!--        <SeeMore v-if="shouldDisplayTool"/>-->
<!--      </h2>-->
<!--    </div>-->
<!--    <div class="flex justify-between">-->
<!--      <router-link to="/">Tous</router-link>-->
<!--      <router-link to="/category">Nouvelle cat&eacute;gorie</router-link>-->
<!--    </div>-->
<!--  </section>-->

  <section class="flex flex-col w-full">
    <div class="place-self-center mb-10">
      <h2 class="text-4xl font-light text-white">Messages</h2>
      <h5 class="rounded-md py-1 px-2 bg-indigo-500 text-white mt-2">4 messages non lus</h5>
    </div>
    <div class="place-self-end relative flex flex-row space-x-5 items-center mb-4">
      <SearchIcon class="w-7 h-7 text-white"/>
      <DotsVerticalIcon class="w-7 h-7 text-white peer" @click="shouldDisplayTool = true"/>
      <SeeMore v-if="shouldDisplayTool" @close="changeState"/>
    </div>
    <div class="flex justify-between">
      <router-link to="/all-message" @click="shouldSwitch = true" :class="{
        'text-white py-2 px-20 font-bold': !shouldSwitch,
        'text-yellow-900 bg-pink-100 rounded-md py-2 px-20 font-bold': shouldSwitch
      }">Tous</router-link>
      <router-link to="/category" @click="shouldSwitch = false" :class="{
        'text-yellow-900 bg-pink-100 rounded-md py-2 px-5 font-bold': !shouldSwitch,
        'text-white px-5 py-2 font-bold': shouldSwitch
      }">Nouvelle cat&eacute;gorie</router-link>
    </div>
  </section>
</template>

<script>
import SeeMore from "./SeeMore.vue";
import { SearchIcon, DotsVerticalIcon } from "@heroicons/vue/outline";

import {ref} from "vue";

export default {
  name: "HeaderMessage",
  components: {SeeMore, DotsVerticalIcon, SearchIcon},
  setup(){
    const shouldSwitch = ref(true);

    const shouldDisplayTool = ref(false);
    const changeState = (newValue) => shouldDisplayTool.value = newValue

    return{
      shouldSwitch,
      shouldDisplayTool, changeState
    }
  }
}
</script>
