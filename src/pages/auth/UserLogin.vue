<template>
  <h1>Login page</h1>

  <div>
    <BaseButton>Click</BaseButton>
    <BaseButton mode="flat">Click</BaseButton>
  </div>

  <div>
    <BaseCard><h1>Hello world</h1></BaseCard>
  </div>

  <div>
    <BaseDialog title="Dialog test" :show="!!error" @close="closeDialog" />
  </div>
</template>

<script setup>
// import BaseButton from "../../components/ui/BaseButton.vue";
// import BaseCard from "../../components/ui/BaseCard.vue";
// import BaseDialog from "../../components/ui/BaseDialog.vue";
// import BaseSpinner from '../../components/ui/BaseSpiner.vue'
import { ref } from "vue";

const error = ref(true);
const closeDialog = () => {
  error.value = !error.value;
};

console.log("login page");
</script>

<style scoped>
div {
  margin: 5rem;
}
</style>
