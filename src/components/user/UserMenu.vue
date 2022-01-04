<template>
  <teleport to="body">
    <div class="menu-container">
      <BaseCard>
        <div class="profile-options">
          <BaseButton mode="flat" @click="updateUser"
            >Update Profile</BaseButton
          >
          <BaseButton mode="flat" @click="logoutUser">Logout</BaseButton>
        </div>
      </BaseCard>
    </div>
  </teleport>
</template>

<script setup>
//
import { defineEmits } from "vue";

const emit = defineEmits(["updateUser", "logoutUser"]);
const updateUser = () => {
  emit("updateUser");
};

const logoutUser = () => {
  console.log("logout");
};
</script>

<style scoped>
.menu-container {
  width: 20rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  padding: 0;
  margin: 0;
  top: 2rem;
  right: -2rem;
}

.profile-options {
  display: flex;
  font-weight: bold;
  flex-direction: column;
}
</style>
