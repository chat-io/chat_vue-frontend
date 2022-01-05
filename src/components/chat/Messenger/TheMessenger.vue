<template>
  <BaseCard>
    <div class="messenger">
      <h1>Messenger Container</h1>
    </div>
  </BaseCard>
</template>

<script setup>
console.log("the messenger");
</script>

<style scoped>
.messenger {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 15px 0;
  margin-bottom: 1rem;
  padding-top: 0;
  height: 80vh;
}
</style>
