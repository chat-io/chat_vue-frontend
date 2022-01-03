<template>
  <h1>Chat Main</h1>
  <UserUpdate @updated="userUpdateHandler" />
</template>

<script setup>
import UserUpdate from "../../components/user/UserUpdate.vue";
//
const userUpdateHandler = () => {
  //
  console.log("user updated : chat main");
};
</script>

<style scoped>
h1 {
  align-self: center;
}
</style>
