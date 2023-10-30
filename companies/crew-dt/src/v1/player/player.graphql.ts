import { findOneCompetition } from '../competition/competition.service';
import { ICompetition } from '../competition/competition.types';
import { findOneTeam } from '../team/team.service';
import { ITeam } from '../team/team.types';
import { findManyPlayers, findManyPlayersByLeagueCode, findOnePlayer } from './player.service';
import { IPlayer, IPlayerSearch, IPlayerSearchByLeagueCode } from './player.types';

export const typeDefs = `#graphql
  type Player {
    _id: ID
    name: String
    position: String
    dateOfBirth: String
    nationality: String
    competition: Competition
    team: Team
  }
  input SearchOnePlayer {
    _id: ID
    name: String
    position: String
    dateOfBirth: String
    nationality: String
  }
  input SearchPlayersByLeagueCode {
    leagueCode: String
  }
  type Query {
    searchOnePlayer(data: SearchOnePlayer): Player
    searchManyPlayer(data: [SearchOnePlayer]): [Player]
    searchManyPlayersByLeague(data: SearchPlayersByLeagueCode): [Player]
  }
`;

export const resolvers = {
	Query: {
    searchOnePlayer: async (_: object, { data }: { data: IPlayerSearch }): Promise<IPlayer> => {
      const result = await findOnePlayer(data);
      if (!result) {
        throw new Error('resource not found');
      }
      return result;
    },
    searchManyPlayer: async (_: object, { data }: { data: IPlayerSearch[] }): Promise<IPlayer[]> => {
      const result = await findManyPlayers(data);
      return result;
    },
    searchManyPlayersByLeague: async (_: object, { data }: { data: IPlayerSearchByLeagueCode }): Promise<IPlayer[]> => {
      const { leagueCode } = data;
      const result = await findManyPlayersByLeagueCode(leagueCode);
      return result;
    },
  },
  Player: {
    competition: async (parent: IPlayer): Promise<ICompetition> => {
      const { competition: { competitionId } } = parent;
      const result = await findOneCompetition({ _id: competitionId });
      return result;
    },
    team: async (parent: IPlayer): Promise<ITeam> => {
      const { team: { teamId } } = parent;
      const result = await findOneTeam({ _id: teamId });
      return result;
    }
  }
};