import { findOneCompetition } from '../competition/competition.service';
import { ICompetition } from '../competition/competition.types';
import { findOneTeam } from '../team/team.service';
import { ITeam } from '../team/team.types';
import { findManyCoach, findOneCoach } from './coach.service';
import { ICoach, ICoachSearch } from './coach.types';

export const typeDefs = `#graphql
  type Coach {
    _id: ID
    name: String
    dateOfBirth: String
    nationality: String
    competition: Competition
    team: Team
  }
  input SearchOneCoach {
    _id: ID
    name: String
    dateOfBirth: String
    nationality: String
  }
  type Query {
    searchOneCoach(data: SearchOneCoach): Coach
    searchManyCoach(data: [SearchOneCoach]): [Coach]
  }
`;

export const resolvers = {
	Query: {
    searchOneCoach: async (_: object, { data }: { data: ICoachSearch }): Promise<ICoach> => {
      const result = await findOneCoach(data);
      if (!result) {
        throw new Error('resource not found');
      }
      return result;
    },
    searchManyCoach: async (_: object, { data }: { data: ICoachSearch[] }): Promise<ICoach[]> => {
      const result = await findManyCoach(data);
      return result;
    },
  },
  Coach: {
    competition: async (parent: ICoach): Promise<ICompetition> => {
      const { competition: { competitionId } } = parent;
      const result = await findOneCompetition({ _id: competitionId });
      return result;
    },
    team: async (parent: ICoach): Promise<ITeam> => {
      const { team: { teamId } } = parent;
      const result = await findOneTeam({ _id: teamId });
      return result;
    }
  }
};