<template>
  <div class="block w-full h-full bg-red-200">
    <!-- Content goes here -->
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: "PlayersPage",
  setup() {
    const data = computed(() => {
      return usePlayerStore().players;
    });
    return {};
  },
});
</script>
