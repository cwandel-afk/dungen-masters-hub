<template>
  <div class="p-4">
    <form @submit.prevent="addNewEntity">
      <div class="form-row">
        <label for="name" class="block font-semibold">Name:</label>
        <input type="text" v-model="entity.name" required />
      </div>
      <div class="form-row">
        <label for="characterType" class="block font-semibold"
          >Character Type:</label
        >
        <input type="text" v-model="entity.characterType" required />
      </div>
      <div class="form-row">
        <label for="strength" class="block font-semibold">Strength:</label>
        <input type="number" v-model="entity.strength" required />
      </div>
      <div class="form-row">
        <label for="dexterity" class="block font-semibold">Dexterity:</label>
        <input type="number" v-model="entity.dexterity" required />
      </div>
      <div class="form-row">
        <label for="constitution" class="block font-semibold"
          >Constitution:</label
        >
        <input type="number" v-model="entity.constitution" required />
      </div>
      <div class="form-row">
        <label for="intelligence" class="block font-semibold"
          >Intelligence:</label
        >
        <input type="number" v-model="entity.intelligence" required />
      </div>
      <div class="form-row">
        <label for="wisdom" class="block font-semibold">Wisdom:</label>
        <input type="number" v-model="entity.wisdom" required />
      </div>
      <div class="form-row">
        <label for="charisma" class="block font-semibold">Charisma:</label>
        <input type="number" v-model="entity.charisma" required />
      </div>
      <button type="submit">Add Entity</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useEntityStore } from "~/stores/entity";
import { Entity } from "~/stores/entity";

export default defineNuxtComponent({
  name: "AddEntity",
  setup() {
    const entityStore = useEntityStore();

    const entity = ref({
      id: "",
      name: "",
      characterType: "",
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    });

    const addNewEntity = () => {
      entity.value.id = Date.now().toString(); // Generate a simple unique ID
      entityStore.addEntity(new Entity(entity.value));
      // Reset form
      entity.value = {
        id: "",
        name: "",
        characterType: "",
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      };
    };

    return {
      entity,
      addNewEntity,
    };
  },
});
</script>
