<template>
  <div class="container" :class="owner">
    <h3>{{ sender.firstName }} {{ sender.lastName }}</h3>
    <p>{{ message.message }}</p>
  </div>
</template>

<script setup>
import { defineProps, toRefs, computed } from "vue";

const props = defineProps({
  chat: {
    type: Object,
  },
  message: {
    type: Object,
  },
  index: {
    type: Number,
  },
  userId: {
    type: String,
  },
});

const { chat } = toRefs(props);
console.log(chat.value);
const sender = chat.value.users.filter((user) => {
  return user.id === props.message.fromUserId.id;
})[0];

const owner = computed(() => {
  return sender.id === props.userId ? "owner" : "";
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 70vw;
  margin: 1rem;
  padding: 0.25rem 2rem;
  background-color: rgb(221, 217, 217);
}

.owner {
  display: flex;
  align-items: flex-end;
  background-color: #ff7f0f;
}

h3 {
  margin-bottom: 0.1rem;
}
</style>
