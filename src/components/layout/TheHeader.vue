<template>
  <UserUpdate v-if="isUpdate" @updated="updated" />
  <UserMenu
    :key="avatarKey"
    v-if="isMenuVisible"
    @updateUser="toggleUpdateModal"
    @logoutUser="logoutUser"
  />
  <header>
    <nav>
      <h1><router-link to="/">Chat.io</router-link></h1>
      <div class="profile-menu" @click="toggleUserMenu">
        <div class="image-container">
          <!-- <img :src="avatarSrc" alt="Avatar" v-if="!isAvatarOutdated" /> -->
          <BaseImage
            :src="avatarSrc"
            alt="Avatar"
            :key="avatarKey"
            class="img"
          />
        </div>
        <p>{{ firstName }} {{ lastName }}</p>
        <font-awesome-icon icon="caret-down" class="icon"></font-awesome-icon>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed, ref, toRef, onBeforeUpdate, onUpdated } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import UserUpdate from "../user/UserUpdate.vue";
import UserMenu from "../user/UserMenu.vue";
import BaseImage from "../ui/BaseImage.vue";

const store = useStore();

const firstName = computed(() => {
  return store.getters["getUser"].firstName;
});
const lastName = computed(() => {
  return store.getters["getUser"].lastName;
});

const avatar = computed(() => {
  return store.getters["getUser"].avatar;
});

//avatar image upate 관리
const userId = store.getters["getUser"].id;
const isAvatarOutdated = ref(false);

let avatarSrc = avatar.value
  ? `${process.env.VUE_APP_FILESERVER_URL}/avatar/${userId}.png`
  : require("@/assets/avatar.png");

const avatarKey = ref(0);
const updated = () => {
  avatarKey.value += 1;
};

//user menu 관리
const isMenuVisible = ref(false);
const toggleUserMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

// update modal 관리
const isUpdate = ref(false);
const toggleUpdateModal = () => {
  toggleUserMenu();
  isUpdate.value = !isUpdate.value;
};

// logout
const router = useRouter();
const logoutUser = () => {
  store.dispatch("logout");
  router.replace("/auth");
};
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
  z-index: 10;
}

.img {
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
