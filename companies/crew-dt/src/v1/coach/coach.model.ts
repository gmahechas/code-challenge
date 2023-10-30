import { CoachModel } from './coach.schema';
import { ICoach, ICoachInsert, ICoachSearch } from './coach.types';

export const insertOne =async (data:ICoachInsert): Promise<ICoach> => {
	const result = await CoachModel.create(data);
	return result;
}

export const findOne = async (data: ICoachSearch): Promise<ICoach> => {
	return await CoachModel.findOne(data).lean();
}

export const findMany = async (data: ICoachSearch[]): Promise<ICoach[]> => {
	const search = !data.length ? [{}] : data;
	const result = await CoachModel.find({ $or: search });
	return result.map(obj => obj.toObject());
}