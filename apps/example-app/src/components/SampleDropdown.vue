<script setup lang="ts">
import { ref } from "vue";

const el = ref();
const autohide_ = ref(true);
const isVisible = ref(false);
</script>

<template>
  <VDropdown ref="el" class="sample-dropdown" :auto-hide="autohide_" v-model:shown="isVisible">
    <button class="border border-gray-300 rounded px-4 py-2">Click me</button>
    <template #popper="{ hide }">
      <button class="border border-gray-300 rounded px-4 py-2"  @click="hide()">Close me</button>
    </template>
  </VDropdown>
</template>

<style scoped>
</style>
