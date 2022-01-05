<template>
  <h1>Chat Main</h1>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

//temporarily 4 is userId.
await store.dispatch("chat/fetchChats", 4);
const chats = computed(() => {
  return store.getters["chat/getChats"];
});

console.log(chats.value);
</script>

<style scoped>
h1 {
  align-self: center;
}
</style>
