<template>
  <header>
    <nav>
      <h1><router-link to="/">Chat.io</router-link></h1>
      <div class="profile-menu">
        <div class="image-container">
          <img :src="avatarSrc" alt="Avatar" />
        </div>
        <p>{{ firstname }} {{ lastname }}</p>
        <font-awesome-icon icon="caret-down" class="icon"></font-awesome-icon>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const user = computed(() => {
  return store.getters["getUser"];
});

const firstname = (user.value && user.value.firstName) || "";
const lastname = (user.value && user.value.lastName) || "";

const avatarSrc = require("@/assets/avatar.png");
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  height: 5rem;
  background-color: #ff7f0f;
  padding: 0 2rem;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
}
nav h1 {
  display: flex;
  align-self: center;
  color: white;
}

nav .profile-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  cursor: pointer;
}

nav .profile-menu img {
  display: flex;
  color: white;
  align-self: center;
  width: 4.5rem;
  margin-right: 1rem;
}

.image-container {
  background-color: #ff7f0f;
  align-self: center;
  display: flex;
  margin-right: 1rem;
  padding: 0;
  width: 4rem;
  height: 4rem;
  border: 2px solid white;
  border-radius: 50%;
  overflow: hidden;
}

nav .profile-menu p {
  display: flex;
  align-self: center;
  color: white;
  margin-right: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
}

.icon {
  font-size: 2rem;
  color: white;
}
</style>
