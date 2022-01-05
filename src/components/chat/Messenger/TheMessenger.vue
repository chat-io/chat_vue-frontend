<template>
  <BaseCard>
    <div class="messenger-container" v-if="isChatActive">
      <header>
        <ChatHeader :chat="chat" />
      </header>
      <hr />
      <MessageBox :chat="chat" />
      <MessageInput :chat="chat" />
    </div>
    <div class="messenger-container" v-else>
      <p>No active chat.</p>
    </div>
  </BaseCard>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import ChatHeader from "./ChatHeader.vue";
import MessageBox from "./MessageBox.vue";
import MessageInput from "./MessageInput.vue";

const store = useStore();

const chat = computed(() => {
  return store.getters["chat/getCurrentChat"];
});

const isChatActive = computed(() => {
  console.log(isChatActive);
  return Object.keys(chat.value).length > 0;
});
</script>

<style scoped>
.messenger-container {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 15px 0;
  margin-bottom: 1rem;
  padding-top: 0;
  height: 80vh;
  align-items: center;
}

hr {
  width: 100%;
}
</style>
