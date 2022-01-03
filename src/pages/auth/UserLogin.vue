<template>
  <BaseCard>
    <div class="img-container">
      <img :src="loginImageSrc" class="login-img" />
    </div>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div class="actions">
        <BaseButton>Login</BaseButton>
      </div>
    </form>
    <div class="to-signup">
      <BaseButton mode="flat">Don't have an account? Signup</BaseButton>
    </div>
  </BaseCard>
</template>

<script setup>
// import { ref } from "vue";

const loginImageSrc = require("@/assets/login.svg");

// const error = ref(true);
console.log("login page");
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem;
  margin-bottom: 1.5rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus {
  border-color: #ff7f00;
  background-color: rgba(255, 128, 0, 0.08);
  outline: none;
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-img {
  width: 50%;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.to-signup {
  display: flex;
  justify-content: center;
}
</style>
