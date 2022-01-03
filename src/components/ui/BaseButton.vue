<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
const props = defineProps({
  mode: {
    type: String,
    requried: false,
    default: null,
  },
  link: {
    type: Boolean,
    required: false,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: "/",
  },
});

const { mode, link, to } = toRefs(props);
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #ff7f00;
  border: 1px solid #ff7f00;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #cf6800;
  border-color: #cf6800;
}

.flat {
  background-color: transparent;
  color: #ff7f00;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #ff7f00;
  color: #ff7f00;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #ff80002d;
}
</style>
