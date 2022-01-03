<template>
  <h1>Login page</h1>

  <div>
    <BaseButton />
  </div>

  <div>
    <BaseCard />
  </div>

  <div>
    <BaseDialog />
  </div>
</template>

<script setup>
import BaseButton from "../../components/ui/BaseButton.vue";
import BaseCard from "../../components/ui/BaseCard.vue";
import BaseDialog from "../../components/ui/BaseDialog.vue";
// import BaseSpinner from '../../components/ui/BaseSpiner.vue'

console.log("login page");
</script>

<style scoped>
div {
  margin: 5rem;
}
</style>
