<template>
  <h1>Chat Main</h1>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

await store.dispatch("chat/fetchChats", 4);
</script>

<style scoped>
h1 {
  align-self: center;
}
</style>
