import { findAllTeams } from "../repositories/teams-repository";
import { ok, noContent } from "../utils/http-helpers";

export const getTeamService = async () => {
  const data = await findAllTeams();
  let response = null;

  if (data) response = await ok(data);
    else response = await noContent();

  return response;
};
