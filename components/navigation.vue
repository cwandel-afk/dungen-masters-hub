<template>
  <div class="w-full h-full">
    <ul class="space-y-1">
      <li class="nav">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav">
        <router-link to="/players">Players</router-link>
      </li>
      <li class="nav">
        <router-link to="/npcs">NPC's</router-link>
      </li>
      <li class="nav">
        <router-link to="/encounters">Encounters</router-link>
      </li>
      <li class="nav">
        <router-link to="/rng-encounter">Random Encounter</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: "Navigation",
});
</script>
