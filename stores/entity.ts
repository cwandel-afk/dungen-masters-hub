import { defineStore } from "pinia";

export type CharacterType = "NPC" | "Player";

export interface IEntity {
  id: string;
  name: string;
  characterType: CharacterType;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export class Entity implements IEntity {
  id: string;
  name: string;
  characterType: CharacterType;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  constructor(entity: IEntity) {
    this.id = entity.id;
    this.name = entity.name;
    this.characterType = entity.characterType;
    this.strength = entity.strength;
    this.dexterity = entity.dexterity;
    this.constitution = entity.constitution;
    this.intelligence = entity.intelligence;
    this.wisdom = entity.wisdom;
    this.charisma = entity.charisma;
  }
}

export const useEntityStore = defineStore("entity", {
  state: () => ({
    entities: [] as Entity[],
    activeEntity: null as Entity | null,
    selectedEntity: null as Entity | null,
  }),
  actions: {
    addEntity(entity: Entity) {
      this.entities.push(entity);
    },
    removeEntity(entityId: string) {
      this.entities = this.entities.filter((entity) => entity.id !== entityId);
    },
    selectEntity(entity: Entity) {
      this.selectedEntity = entity;
    },
    clearSelection() {
      this.selectedEntity = null;
    },
    next() {
      if (!this.activeEntity) {
        this.activeEntity = this.entities[0];
        console.log(this.activeEntity);
        return;
      }

      const index = this.entities.indexOf(this.activeEntity);
      if (index < this.entities.length - 1) {
        this.activeEntity = this.entities[index + 1];
      } else {
        this.activeEntity = this.entities[0];
      }
      console.log(this.activeEntity);
    },
    previous() {
      const index = this.entities.indexOf(this.selectedEntity!);
      if (index > 0) {
        this.selectedEntity = this.entities[index - 1];
      }
    },
  },
});
