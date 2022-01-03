<template>
  <section>
    <h1>Page Not Found</h1>
    <img :src="require('@/assets/not_found.svg')" alt="" />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem;
  width: 50%;
  margin: 3rem auto;
}

img {
  margin-top: 3rem;
}

h1 {
  align-self: center;
  font-size: 3rem;
}
</style>
