<template>
  <div class="message-container" v-if="!isEmpty">
    <TheMessage
      v-for="(message, index) in chat.messages"
      :key="message.id"
      :message="message"
      :index="index"
      :userId="userId"
      :chat="chat"
    ></TheMessage>
  </div>
  <p v-else>No messages.</p>
</template>

<script setup>
import { computed, toRefs, defineProps } from "vue";
import { useStore } from "vuex";
import useUser from "../../../hook/user.js";

import TheMessage from "./TheMessage.vue";

const store = useStore();

const props = defineProps({
  chat: {
    type: Object,
    required: true,
  },
});

const { chat } = toRefs(props);

const { userId } = useUser();
// const userId = computed(() => {
//   return store.getters["getUser"].id;
// });

const isEmpty = computed(() => {
  return chat.value.messages.length === 0;
});
</script>

<style scoped>
.message-container {
  display: flex;
  flex-direction: column-reverse;
  scroll-behavior: auto;
  overflow-y: scroll;
}
</style>
