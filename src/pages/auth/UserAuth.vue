<template>
  <BaseCard>
    <div class="img-container">
      <img :src="loginImageSrc" v-if="!isSignup" />
      <img :src="signupImageSrc" v-else />
    </div>

    <h1 class="page-title">{{ pageTitle }}</h1>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="text" id="email" v-model="enteredEmail" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="enteredPassword" />
      </div>

      <!-- signup  -->
      <div class="signup-form" v-if="isSignup">
        <div class="form-control">
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" v-model="enteredFirstName" />
        </div>
        <div class="form-control">
          <label for="lastname">Last Name</label>
          <input type="text" id="lastname" v-model="enteredLastName" />
        </div>
        <div class="form-control">
          <label for="gender">Gender</label>
          <select id="gender" required="true" v-model="enteredGender">
            <option value="male">Male</option>
            <option value="femail">Female</option>
          </select>
        </div>
      </div>

      <div class="actions">
        <BaseButton>{{ pageTitle }}</BaseButton>
      </div>
    </form>
    <div class="to-signup actions">
      <BaseButton mode="flat" @click="toggleAuthMode">
        {{ toggleAuthModeButtonText }}
      </BaseButton>
    </div>
  </BaseCard>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const loginImageSrc = require("@/assets/login.svg");
const signupImageSrc = require("@/assets/signup.svg");

//auth mode 관리 (loing / signup)
const isSignup = ref(false);

console.log(isSignup);
const pageTitle = computed(() => {
  return isSignup.value ? "Singup" : "Login";
});

const toggleAuthModeButtonText = computed(() => {
  return isSignup.value
    ? `Already have an account? Login!`
    : `Don't have an account? Singup!`;
});

const toggleAuthMode = () => {
  isSignup.value = !isSignup.value;
};

// user input data
const enteredEmail = ref("");
const enteredPassword = ref("");
const enteredFirstName = ref("");
const enteredLastName = ref("");
const enteredGender = ref("");

//submit handler
const store = useStore();
const router = useRouter();

const submitForm = () => {
  // prepare action payload
  const actionPayload = {
    email: enteredEmail.value,
    password: enteredPassword.value,
  };

  if (isSignup.value) {
    actionPayload.firstName = enteredFirstName.value;
    actionPayload.lastName = enteredLastName.value;
    actionPayload.gender = enteredGender.value;
  }

  // dispatch auth action

  try {
    if (!isSignup.value) {
      //login mode
      store.dispatch("login", actionPayload);
    } else {
      // signup mode
      store.dispatch("signup", actionPayload);
    }
    const redirectUrl = `/chat`;
    router.replace(redirectUrl);
  } catch (error) {
    // error handling (github #5)
    console.log(error);
  }
};
</script>

<style scoped>
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
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-container img {
  width: 40%;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.to-signup {
  display: flex;
  justify-content: center;
}

.page-title {
  display: flex;
  justify-content: center;
}
</style>
