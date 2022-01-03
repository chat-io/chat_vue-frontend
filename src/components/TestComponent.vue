<template>
  <h1>{{ name }}</h1>
  <ul>
    <li v-for="user in usersList" :key="user.id">
      <h3>{{ user.firstName }} {{ user.lastName }}</h3>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, toRefs, computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  name: String,
});
const { name } = toRefs(props);

const store = useStore();
store.dispatch("test/getUsers");
const usersList = computed(() => {
  return store.getters["test/users"];
});
</script>
