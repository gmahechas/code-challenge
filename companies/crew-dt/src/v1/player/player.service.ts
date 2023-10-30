import { insertOne, findOne, findMany, findManyByLeagueCode } from './player.model';
import { IPlayerInsert, IPlayerSearch, IPlayerSearchByLeagueCode } from './player.types';

export const insertOnePlayer = async (data: IPlayerInsert) => {
	return await insertOne(data);
}

export const findOnePlayer = async (data: IPlayerSearch) => {
	return await findOne(data);
}

export const findManyPlayers = async (data: IPlayerSearch[]) => {
	return await findMany(data);
}

export const findManyPlayersByLeagueCode = async (leagueCode: string) => {
	return await findManyByLeagueCode(leagueCode);
}