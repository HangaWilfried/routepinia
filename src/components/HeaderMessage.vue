<template>
  <!--si le scroll se fait vers le haut-->
  <section class="flex flex-col">
    <div>
      <h2>Messages</h2>
      <h2>
        <span>icone de recherche</span>
        <span @click="changeState">icone des options menu</span>
        <SeeMore v-if="shouldDisplayTool"/>
      </h2>
    </div>
    <div>
      <router-link to="/">Tous</router-link>
      <router-link to="/category">Nouvelle cat&eacute;gorie</router-link>
    </div>
  </section>

  <!--si le scroll se fait vers le bas-->
  <section class="flex flex-col">
    <div class="place-self-center mb-10">
      <h2>Messages</h2>
      <h5 class="rounded-md p-2 bg-gray-100 text-zinc-600">nombres de messages non lus</h5>
    </div>
    <div class="place-self-end relative flex flex-row space-x-5 items-center mb-4">
      <span>icone de recherche</span>
      <span @click="changeState">icone des options menu</span>
      <SeeMore v-if="shouldDisplayTool"/>
    </div>
    <div class="place-self-start w-full flex flex-row space-x-3">
      <router-link to="/" @click="shouldSwitch = true" :class="{
        'border border-gray-800 text-gray-900': shouldSwitch,
        'text-gray-200 px-5 py-2': !shouldSwitch
      }">Tous</router-link>
      <router-link to="/category" @click="shouldSwitch = false" :class="{
        'border border-gray-800 text-gray-900': !shouldSwitch,
        'text-gray-200 px-5 py-2': shouldSwitch
      }">Nouvelle cat&eacute;gorie</router-link>
    </div>
  </section>
</template>

<script>
import SeeMore from "./SeeMore.vue";
import {ref} from "vue";

export default {
  name: "HeaderMessage",
  components: {SeeMore},
  setup(){
    const shouldSwitch = ref(false);

    const shouldDisplayTool = ref(false);
    const changeState = () =>{
      if(shouldDisplayTool.value === false){
        return shouldDisplayTool.value = true
      }
      return shouldDisplayTool.value = false;
    };

    return{
      shouldSwitch,
      shouldDisplayTool, changeState
    }
  }
}
</script>
