<template>
  <img :src="imgSrc" :alt="alt" />
</template>

<script setup>
import { ref, defineProps, onBeforeMount } from "vue";

const props = defineProps({
  src: {
    type: String,
    reqruied: true,
  },
  alt: {
    type: String,
    required: false,
    default: "image",
  },
});

const imgSrc = ref(props.src);

//같은 url img 테그가 마운트 될 때마다 새로운 (업데이트된) 이미지를 가져오도록 함 (캐싱된 이미지 사용 X)
onBeforeMount(() => {
  imgSrc.value += `?${new Date().getTime()}`;
});
</script>
