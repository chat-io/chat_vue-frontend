<template>
  <TheHeader v-if="isAuthenticated" />
  <router-view></router-view>
</template>

<script setup>
// import TestComponent from "./components/TestComponent.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isAuthenticated = computed(() => store.getters["isAuthenticated"]);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
