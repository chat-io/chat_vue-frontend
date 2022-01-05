<template>
  <p>{{ firstName }} {{ lastName }}</p>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  chat: {
    type: Object,
  },
});

const { firstName, lastName } = toRefs(props.chat.users[0]);

console.log(props.chat);
</script>
