import { PlayerModel } from './player.schema';
import { IPlayer, IPlayerInsert, IPlayerSearch, IPlayerSearchByLeagueCode } from './player.types';

export const insertOne = async (data: IPlayerInsert): Promise<IPlayer> => {
	const result = await PlayerModel.create(data);
	return result.toObject();
}

export const findOne = async (data: IPlayerSearch): Promise<IPlayer> => {
	return await PlayerModel.findOne(data).lean();
}

export const findMany = async (data: IPlayerSearch[]): Promise<IPlayer[]> => {
	const search = !data.length ? [{}] : data;
	const result = await PlayerModel.find({ $or: search });
	return result.map(obj => obj.toObject());
}

export const findManyByLeagueCode = async (leagueCode: string): Promise<IPlayer[]> => {
	const result = await PlayerModel.find({ 'competition.competitionCode': leagueCode });
	return result.map(obj => obj.toObject());
}