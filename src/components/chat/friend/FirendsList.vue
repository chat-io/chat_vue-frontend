<template>
  <BaseCard>
    <div class="friends">
      <div class="title">
        <h3>Friends</h3>
        <BaseButton>Add</BaseButton>
      </div>

      <hr />

      <div class="firend-box">
        <div v-if="hasFriends">
          <TheFriend
            v-for="chat in chats"
            :chat="chat"
            :key="chat.id"
            @chatSelected="chatSelected"
          />
        </div>
        <div v-else>
          <p>No friends.</p>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { ref, watch, computed, onBeforeMount, onMounted } from "vue";
import { useStore } from "vuex";

import TheFriend from "./TheFriend.vue";

const store = useStore();
const chats = computed(() => {
  return store.getters["chat/getChats"];
});

onMounted(async () => {
  const userId = JSON.parse(localStorage.getItem("user")).id;
  await store.dispatch("chat/fetchChats", userId);
  console.log(chats.value);
});

const hasFriends = ref(false);

watch(() => {
  if (chats.value.length > 0) {
    hasFriends.value = true;
  } else {
    hasFriends.value = false;
  }
  console.log(hasFriends.value);
});

const chatSelected = (chat) => {
  store.dispatch("chat/setCurrentChat", chat);
  // console.log(store.getters["chat/getCurrentChat"]);
};
</script>

<style scoped>
.friends {
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  background-color: #fff;
  margin-bottom: 1rem;
  padding-top: 0;
  height: 80vh;
}

.title {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: flex-end;
}

hr {
  border-top: 1px solid #cfcfcf;
  width: 100%;
  margin-bottom: 0;
}
</style>
