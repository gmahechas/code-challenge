import { findMany, findOne, insertOne } from './team.model';
import { ITeamInsert, ITeamSearch } from './team.types';

export const insertOneTeam = async (data: ITeamInsert) => {
	return await insertOne(data);
}

export const findOneTeam = async (data: ITeamSearch) => {
	return await findOne(data);
}

export const findManyTeams = async (data: ITeamSearch[]) => {
	return await findMany(data);
}