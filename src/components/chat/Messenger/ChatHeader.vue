<template>
  <div class="container">
    <div class="chatter-info" v-for="user in chat.users" :key="user.id">
      <h3>{{ user.firstName }} {{ user.lastName }}</h3>
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs, defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  chat: {
    type: Object,
    required: true,
  },
});

const userId = computed(() => {
  return store.getter["getUser"].id;
});

const { chat } = toRefs(props);
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
}

.chatter-info {
  display: flex;
  margin-right: 1rem;
}
</style>
