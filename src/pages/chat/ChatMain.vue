<template>
  <div class="container">
    <div class="friend-list">
      <FriendsList />
    </div>
    <div class="messenger-container">
      <TheMessenger />
    </div>
  </div>
</template>

<script setup>
import FriendsList from "../../components/chat/Friend/FirendsList.vue";
import TheMessenger from "../../components/chat/Messenger/TheMessenger.vue";
</script>

<style scoped>
.container {
  display: flex;
  width: 100wh;
}
.friend-list {
  width: 30%;
  margin: 0;
  margin-left: 2rem;
}
.messenger-container {
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
