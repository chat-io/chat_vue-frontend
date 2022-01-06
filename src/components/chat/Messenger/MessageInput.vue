<template>
  <div class="input-container">
    <input type="text" />
    <BaseButton>Send</BaseButton>
  </div>
</template>

<style scoped>
.input-container {
  position: relative;
  display: flex;
  width: 100%;
  padding: 1rem;
}

input {
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  margin-right: 1rem;
}
</style>
