<template>
  <BaseCard @click="chatSelected">
    <div class="friend-item" :class="isChatOpen">
      <div class="img-container">
        <img :src="partner.avatar" alt="avatar" />
      </div>
      <div class="friend-info">
        <h4>{{ partner.firstName }} {{ partner.lastName }}</h4>
        <h5>{{ lastMessage }}</h5>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { defineProps, toRefs, computed } from "vue";
import { useStore, defineEmits } from "vuex";

const store = useStore();

const emit = defineEmits(["chatSelected"]);

const props = defineProps({
  chat: {
    type: Object,
  },
});

const { chat } = toRefs(props);

const userId = computed(() => {
  return store.getters["getUser"].id;
});

const partner = chat.value.users.find((user) => {
  return user.id !== userId.value;
});

const id = computed(() => {
  return chat.value.id;
});
const messages = computed(() => {
  return chat.value.messages;
});

const currentChat = computed(() => {
  return store.getters["chat/getCurrentChat"];
});

const isChatOpen = computed(() => {
  return currentChat.value.id === id.value ? "opened" : "";
});

const lastMessage = computed(() => {
  return messages.value.length === 0 ? "" : messages.value[0].message;
});

const chatSelected = () => {
  emit("chatSelected", props.chat);
};
</script>

<style scoped>
.friend-item {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin: 0;
  height: 5rem;
  margin-top: 0.5rem;
}

.img-container {
  border: 2px solid #ff7f0f;
  border-radius: 50%;
  width: 6rem;
  height: 4rem;
  padding: 0;
  margin-right: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

img {
  display: flex;
  align-self: center;
  margin: 0;
  padding: 0;
  /* margin-right: 2.5rem; */
  width: 4rem;
  height: 4rem;
}

.friend-info {
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 100%;
}
.friend-info h4 {
  font-weight: bold;
  font-size: 1.5rem;
}
.friend-info h5 {
  font-size: 1rem;
  font-weight: normal;
  color: rgb(77, 77, 77);
}

.friend-info h4,
.friend-info h5 {
  margin: 0;
  margin-bottom: 1rem;
}
</style>
