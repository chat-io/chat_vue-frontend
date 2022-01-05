<template>
  <div class="friend-list">
    <FriendsList />
  </div>
</template>

<script setup>
import { computed, onBeforeMount, on } from "vue";

import FriendsList from "../../components/chat/friend/FirendsList.vue";
</script>

<style scoped>
h1 {
  align-self: center;
}
.friend-list {
  width: 30%;
  margin-left: 2rem;
}
</style>
