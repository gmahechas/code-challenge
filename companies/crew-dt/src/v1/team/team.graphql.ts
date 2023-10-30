import { findOneCompetition } from '../competition/competition.service';
import { ICompetition } from '../competition/competition.types';
import { findManyPlayers } from '../player/player.service';
import { IPlayer } from '../player/player.types';
import { findManyTeams, findOneTeam } from './team.service';
import { ITeam, ITeamSearch } from './team.types';

export const typeDefs = `#graphql
  type Team {
    _id: ID
    name: String
    tla: String
    shortName: String
    areaName: String
    address: String
    competition: Competition
    players: [Player]
  }
  input SearchOneTeam {
    _id: ID
    name: String
    tla: String
    shortName: String
    areaName: String
    address: String
  }
  type Query {
    searchOneTeam(data: SearchOneTeam): Team
    searchManyTeam(data: [SearchOneTeam]): [Team]
  }
`;

export const resolvers = {
  Query: {
    searchOneTeam: async (_: object, { data }: { data: ITeamSearch }): Promise<ITeam> => {
      const result = await findOneTeam(data);
      if (!result) {
        throw new Error('resource not found');
      }
      return result;
    },
    searchManyTeam: async (_: object, { data }: { data: ITeamSearch[] }): Promise<ITeam[]> => {
      const result = await findManyTeams(data);
      return result;
    },
  },
  Team: {
    competition: async (parent: ITeam): Promise<ICompetition> => {
      const { competition: { competitionId } } = parent;
      const result = await findOneCompetition({ _id: competitionId });
      return result;
    },
    players: async (parent: ITeam): Promise<IPlayer[]> => {
      const { _id, tla } = parent;
      const result = await findManyPlayers([{ team: { teamId: _id, teamTla: tla } }]);
      return result;
    }
  }
};