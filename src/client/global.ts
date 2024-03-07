import { ref } from "vue";
import type { Hits } from "meilisearch";

export let query = ref("");
export let modalVisible = ref(false);
export let canHide = ref(true);
export let currentIndex = ref(0);
export let currentHitUrl = ref();
export let hits = ref<Hits>([]);

export const showModal = () => {
  modalVisible.value = true;
};

export const hideModal = () => {
  if (canHide.value) {
    currentIndex.value = 0;
    modalVisible.value = false;
  }
};
