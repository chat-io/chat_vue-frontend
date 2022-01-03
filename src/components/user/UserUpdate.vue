<template>
  <BaseDialog :show="show" title="User Update" @close="closeWindow">
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="enteredPassword" />
      </div>
      <div class="form-control">
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" v-model="enteredFirstName" />
      </div>
      <div class="form-control">
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" v-model="enteredLastName" />
      </div>
      <div class="form-control">
        <label for="avatar">Avatar</label>
        <input type="file" id="avatar" />
      </div>
      <div class="form-control">
        <label for="gender">Gender</label>
        <select id="gender" required="true" v-model="enteredGender">
          <option value="male">Male</option>
          <option value="femail">Female</option>
        </select>
      </div>
    </form>
    <template #actions>
      <BaseButton>Confirm</BaseButton>
      <BaseButton mode="flat" @click="closeWindow">Cancel</BaseButton>
    </template>
  </BaseDialog>
</template>

<script setup>
import { ref } from "vue";
import { getUserInfoFromLocalStorage } from "..//../util/localStorage/getUserInfo.js";

const userInfo = getUserInfoFromLocalStorage();

// user update input initialization
const enteredPassword = ref("");
const enteredFirstName = ref(userInfo.firstName);
const enteredLastName = ref(userInfo.lastName);
const enteredAvatar = ref(null);
const enteredGender = ref(userInfo.gender);

//submit handler
const submitForm = () => {
  console.log(enteredPassword.value);
  console.log(enteredFirstName.value);
  console.log(enteredLastName.value);
};

const show = ref(true);

const closeWindow = () => {
  show.value = false;
};
</script>

<style scoped>
/*  */
form {
  margin: 1rem;

  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
select {
  display: b lock;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  font-size: 1.25rem;
}

input:focus {
  border-color: #ff7f00;
  background-color: rgba(255, 128, 0, 0.085);
  outline: none;
}
</style>
