<template>
  <BaseDialog :show="isLoading" title="Updating User Info..." fixed>
    <BaseSpinner />
  </BaseDialog>
  <BaseDialog :show="show" title="User Update" @close="closeWindow">
    <form>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="enteredPassword" />
      </div>
      <div class="form-control">
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" v-model.trim="enteredFirstName" />
      </div>
      <div class="form-control">
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" v-model.trim="enteredLastName" />
      </div>
      <div class="form-control">
        <label for="avatar">Avatar</label>
        <input type="file" id="avatar" ref="enteredAvatar" />
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
      <BaseButton @click="submitForm">Confirm</BaseButton>
      <BaseButton mode="flat" @click="closeWindow">Cancel</BaseButton>
    </template>
  </BaseDialog>
</template>

<script setup>
import { ref, computed, onBeforeUpdate, defineEmits } from "vue";
import { useStore } from "vuex";
import { getUserInfoFromLocalStorage } from "..//../util/localStorage/getUserInfo.js";
import { updateUser } from "../../services/UserService.js";
const userInfo = getUserInfoFromLocalStorage();

// user update input initialization
const enteredPassword = ref("");
const enteredFirstName = ref(userInfo.firstName);
const enteredLastName = ref(userInfo.lastName);
const enteredAvatar = ref(null);
const enteredGender = ref(userInfo.gender);

//submit handler
const emit = defineEmits(["updated"]);
const store = useStore();
const isLoading = ref(false);
const error = ref(null);
const userId = computed(() => {
  return store.getters["getUser"].id;
});

const updateAvatar = (avatar) => {
  const formData = new FormData();
  formData.append("avatar", avatar);
  store.dispatch("updateUserAvatar", formData);
};

const submitForm = async () => {
  closeWindow();
  isLoading.value = true;
  const updateData = {
    ...userInfo,
  };

  if (enteredPassword.value !== "") {
    updateData.password = enteredPassword.value;
  }
  if (enteredFirstName.value !== "") {
    updateData.firstName = enteredFirstName.value;
  }
  if (enteredLastName.value !== "") {
    updateData.lastName = enteredLastName.value;
  }

  if (enteredAvatar.value.files.length === 1) {
    updateData.avatar = `${process.env.VUE_APP_FILEFSERVER_URL}/avatar/${userId.value}`;

    const avatar = enteredAvatar.value.files[0];
    updateAvatar(avatar);
  }

  updateData.gender = enteredGender.value;

  try {
    isLoading.value = true;
    const updatedUser = await updateUser(updateData);
    const { token, user } = await updatedUser.data.updateUser;

    // vuex state update
    store.dispatch("updateUser", { token, user });

    //localStorage update
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    error.value = err.message || "Failed to update user.";
  }
  isLoading.value = false;

  //update complete
  if (!isLoading.value && !error.value) {
    emit("updated");
    closeWindow();
  }
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
