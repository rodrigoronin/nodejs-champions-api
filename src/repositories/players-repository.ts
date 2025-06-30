import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: 'Neymar'
  },
  {
    id: 2,
    name: 'Bruxo'
  }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerbyId = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};
