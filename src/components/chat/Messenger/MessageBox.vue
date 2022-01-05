<template>
  <div class="message-container">
    <TheMessage
      v-for="(message, index) in chat.messages"
      :key="message.id"
      :message="message"
      :index="index"
      :userId="userId"
      :chat="chat"
    ></TheMessage>
  </div>
</template>

<script setup>
import { computed, toRefs, defineProps } from "vue";
import { useStore } from "vuex";

import TheMessage from "./TheMessage.vue";

const store = useStore();

const props = defineProps({
  chat: {
    type: Object,
    required: true,
  },
});

const { chat } = toRefs(props);

const userId = computed(() => {
  return store.getters["getUser"].id;
});

const { messages } = toRefs(props.chat);
console.log(messages);
</script>

<style scoped>
.message-container {
  display: flex;
  flex-direction: column-reverse;
  scroll-behavior: auto;
  /* flex-grow: 2; */
  /* height: 0; */
  overflow-y: scroll;
}
</style>
