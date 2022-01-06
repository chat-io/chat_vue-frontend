<template>
  <div class="container">
    <h3>{{ partner.firstName }} {{ partner.lastName }}</h3>
  </div>
</template>

<script setup>
import { computed, watch, toRefs, defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  chat: {
    type: Object,
    required: true,
  },
});

const { chat } = toRefs(props);

const userId = computed(() => {
  return store.getters["getUser"].id;
});

const partner = computed(() => {
  return chat.value.users.find((user) => {
    return user.id !== userId.value;
  });
});
</script>

<style scoped>
.container {
  overflow-y: auto;
  display: flex;
  text-align: left;
  margin-top: 0.5rem;
}

h3 {
  margin-right: 1rem;
  font-size: 1.75rem;
}

.chatter-info {
  display: flex;
  margin-right: 1rem;
}
</style>
