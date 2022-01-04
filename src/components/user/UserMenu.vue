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

const updateUser = () => {
  console.log("update");
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
