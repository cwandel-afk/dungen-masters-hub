<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center w-screen h-screen bg-gray-800 bg-opacity-50"
  >
    <div
      class="h-2/3 block w-1/2 overflow-y-auto bg-white rounded-lg shadow-lg"
    >
      <div
        class="bg-stone-200 sticky top-0 z-50 flex items-center justify-between w-full p-6"
      >
        <h1 class="text-2xl font-semibold tracking-widest">{{ title }}</h1>

        <XMarkIcon
          class="hove-r:text-gray-200 size-12 bg-opacity-10 hover:bg-opacity-35 p-2 text-gray-500 bg-gray-900 rounded-full"
          @click="hidePopup"
        />
      </div>

      <div>
        <component :is="component" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";
import addEntity from "./add-entity.vue";

export default defineComponent({
  name: "Popup",
  components: {
    addEntity,
    XMarkIcon,
  },
  setup() {
    const { hidePopup } = usePopupStore();

    const component = computed(() => usePopupStore().component);
    const isVisible = computed(() => usePopupStore().isVisible);
    const title = computed(() => usePopupStore().title);

    return { hidePopup, isVisible, component, title };
  },
});
</script>
