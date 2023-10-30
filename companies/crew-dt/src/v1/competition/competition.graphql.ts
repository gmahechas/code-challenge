import { importLeagueByCode, findOneCompetition, findManyCompetition } from './competition.service';
import { ICompetition, ICompetitionSearch, IImportLeagueInput } from './competition.types';
import { ITeam } from '../team/team.types';
import { findManyTeams } from '../team/team.service';

export const typeDefs = `#graphql
  type Competition {
    _id: ID
    name: String
    code: String
    areaName: String
    teams: [Team]
  }
  input ImportLeague {
    leagueCode: String
  }
  input SearchOneCompetition {
    _id: ID
    name: String
    code: String
    areaName: String
  }
	type Mutation {
    importLeague(data: ImportLeague): Boolean
  }
  type Query {
    searchOneCompetition(data: SearchOneCompetition): Competition @validation(schema: "schemaForSearchOneCompetition") @logger
    searchManyCompetition(data: [SearchOneCompetition]): [Competition] @validation(schema: "schemaForSearchManyCompetition") @logger
  }
`;

export const resolvers = {
  Mutation: {
    importLeague: async (_: object, { data }: { data: IImportLeagueInput }): Promise<boolean> => {
      const { leagueCode } = data;
      const response = importLeagueByCode(leagueCode);
      return response;
    },
  },
  Query: {
    searchOneCompetition: async (_: object, { data }: { data: ICompetitionSearch }): Promise<ICompetition> => {
      const result = await findOneCompetition(data);
      if (!result) {
        throw new Error('resource not found');
      }
      return result;
    },
    searchManyCompetition: async (_: object, { data }: { data: ICompetitionSearch[] }): Promise<ICompetition[]> => {
      const result = await findManyCompetition(data);
      return result;
    },
  },
  Competition: {
    teams: async (parent: ICompetition): Promise<ITeam[]> => {
      const { _id, code } = parent;
      const result = await findManyTeams([{ competition: { competitionId: _id, competitionCode: code } }]);
      return result;
    }
  }
};