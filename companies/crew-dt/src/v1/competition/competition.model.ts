import { CompetitionModel } from './competition.schema';
import { ICompetition, ICompetitionInsert, ICompetitionSearch } from './competition.types';

export const insertOne = async (data: ICompetitionInsert): Promise<ICompetition> => {
	const result = await CompetitionModel.create(data);
	return result.toObject();
};

export const findOne = async (data: ICompetitionSearch): Promise<ICompetition> => {
	return await CompetitionModel.findOne(data).lean();
}

export const findMany = async (data: ICompetitionSearch[]): Promise<ICompetition[]> => {
	const search = !data.length ? [{}] : data;
	const result = await CompetitionModel.find({ $or: search });
	return result.map(obj => obj.toObject());
}