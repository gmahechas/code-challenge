import { TeamModel } from './team.shema';
import { ITeam, ITeamInsert, ITeamSearch } from './team.types';

export const insertOne = async (data: ITeamInsert): Promise<ITeam> => {
	const result = await TeamModel.create(data);
	return result.toObject();
}

export const findOne = async (data: ITeamSearch): Promise<ITeam> => {
	return await TeamModel.findOne(data).lean();
}

export const findMany = async (data: ITeamSearch[]): Promise<ITeam[]> => {
	const search = !data.length ? [{}] : data;
	const result = await TeamModel.find({ $or: search });
	return result.map(obj => obj.toObject());
}