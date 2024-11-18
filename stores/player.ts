import type { Entity } from "./entity";

export interface IPlayer {
  id: string;
  name: string;
  notes: string[];
  entity: Entity;
}

export class Player implements IPlayer {
  id: string;
  name: string;
  notes: string[];
  entity: Entity;

  constructor(player: IPlayer) {
    this.id = player.id;
    this.name = player.name;
    this.notes = player.notes;
    this.entity = player.entity;
  }
}
export const usePlayerStore = defineStore("player", {
  state: () => ({
    players: [] as Player[],
    selectedPlayer: null as Player | null,
  }),
  actions: {
    addPlayer(player: Player) {
      this.players.push(player);
    },
    removePlayer(playerId: string) {
      this.players = this.players.filter((player) => player.id !== playerId);
    },
    selectPlayer(player: Player) {
      this.selectedPlayer = player;
    },
    clearSelection() {
      this.selectedPlayer = null;
    },
  },
});
