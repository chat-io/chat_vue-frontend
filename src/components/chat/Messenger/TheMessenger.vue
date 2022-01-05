<template>
  <BaseCard>
    <div class="messenger">
      <h1>{{ chat.id }}</h1>
      <p>{{ chat.users[0].email }}</p>
    </div>
  </BaseCard>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const chat = computed(() => {
  return store.getters["chat/getCurrentChat"];
});
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
  align-items: center;
}
</style>
