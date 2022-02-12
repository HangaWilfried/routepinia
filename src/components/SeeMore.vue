<template>
  <div class="cursor-pointer shadow-xl bg-white rounded-xl text-zinc-600 absolute right-0 w-60 py-4 px-8 flex flex-col space-y-2">
    <div class="flex justify-between items-center">
      Supprimer
      <XIcon class="text-gray-400 w-5 h-5" @click="$emit('close', false)"/>
    </div>
    <div>Tout marquer comme lu</div>
    <div>Modifier les cat&eacute;gories</div>
    <div>Messages suivis</div>
    <div>R&eacute;ponses rapides</div>
    <div class="flex flex-row justify-between">
      <span>Param&egrave;tres</span>
      <span>N</span></div>
  </div>
</template>

<script>
import {XIcon} from "@heroicons/vue/outline";

export default {
  name: "SeeMore",
  components: {XIcon},
  emits: ["close"]
}
</script>
