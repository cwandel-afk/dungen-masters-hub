<template>
  <div class="bg-sky-100 grid w-screen h-screen grid-cols-5">
    <div class="w-full h-screen col-span-1 bg-white">
      <Initiative />
      <Navigation />
    </div>
    <div class="col-span-4">
      <slot />
    </div>
  </div>
  <PopUp />
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style scoped>
/* Add your styles here */
</style>
