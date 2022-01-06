import { computed } from "vue";
import store from "../store/index";

const useUser = () => {
  const userId = computed(() => {
    return store.getters["getUser"].id;
  });

  const firstName = computed(() => {
    return store.getters["getUser"].firstName;
  });

  const lastName = computed(() => {
    return store.getters["getUser"].lastName;
  });

  const avatar = computed(() => {
    return store.getters["getUser"].avatar;
  });

  return {
    userId,
    firstName,
    lastName,
    avatar,
  };
};

export default useUser;
