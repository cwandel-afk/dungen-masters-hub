<template>
  <div class="h-52 block w-full p-2">
    <div class="flex w-full h-full rounded-md">
      <ul
        class="bg-stone-400 relative flex items-center justify-start p-3 space-x-3 shadow-lg"
      >
        <li
          class="h-36 bg-blue-50 hover:cursor-grab first:h-40 first:w-44 first:animate-pop flex items-center justify-center flex-1 w-32 rounded-md"
        >
          <label class="pointer-events-none">
            {{ activePlayer?.name }}
          </label>
        </li>
        <li
          class="h-36 bg-blue-50 hover:cursor-grab first:h-40 first:w-44 first:animate-pop flex items-center justify-center flex-1 w-32 rounded-md"
          v-for="(item, index) in data"
          :key="index"
          v-if="showList"
        >
          <label class="pointer-events-none">
            {{ item }}
          </label>
        </li>
        <MinusIcon
          class="size-6 right-2 top-2 absolute cursor-pointer"
          v-if="showList"
          @click="toggleList()"
        />
        <PlusIcon
          class="size-6 right-2 top-2 absolute cursor-pointer"
          v-if="!showList"
          @click="toggleList()"
        />
      </ul>
      <div
        id="actions"
        class="bg-stone-300 rounded-r-md grid grid-rows-3 p-3 space-y-2"
      >
        <button
          class="p-2 text-white bg-blue-500 rounded-md"
          @click="openPopUp()"
        >
          Add
        </button>
        <button class="p-2 text-white bg-red-500 rounded-md">Remove</button>
        <div class="grid grid-cols-2 space-x-2">
          <button
            class="bg-slate-500 p-2 text-white rounded-md"
            @click="previous()"
          >
            Prev
          </button>
          <button
            class="bg-slate-500 p-2 text-white rounded-md"
            @click="next()"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { MinusIcon, PlusIcon } from "@heroicons/vue/24/solid";
export default defineNuxtComponent({
  name: "Initiative",
  components: {
    MinusIcon,
    PlusIcon,
  },
  setup() {
    const animationTrigger: Ref<boolean> = ref(true);
    const showList: Ref<boolean> = ref(false);

    const data = computed(() => {
      return useEntityStore().entities.map((entity) => entity.name);
    });

    const activePlayer = computed(() => {
      return useEntityStore().activeEntity;
    });

    const toggleList = () => {
      showList.value = !showList.value;
    };

    return {
      data,
      animationTrigger,
      activePlayer,
      showList,
      toggleList,
    };
  },
  methods: {
    openPopUp() {
      usePopupStore().showPopup("Add an Entity");
      usePopupStore().setComponent("addEntity");
    },
    next() {
      useEntityStore().next();
    },
    previous() {
      useEntityStore().previous();
    },
  },
});
</script>

<style scoped>
/* Your component styles go here */
</style>
