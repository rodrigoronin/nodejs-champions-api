import { findAllPlayers } from "../repositories/players-repository";
import { ok, noContent } from "../utils/http-helpers";

export const getPlayerService = async () => {
  const data = await findAllPlayers();
  let response = null;

  if (data) response = await ok(data);
    else response = await noContent();

  return response;
};
