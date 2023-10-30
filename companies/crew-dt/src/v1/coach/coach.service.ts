import { insertOne, findOne, findMany } from './coach.model';
import { ICoachInsert, ICoachSearch } from './coach.types';

export const insertOneCoach = async (data: ICoachInsert) => {
	return await insertOne(data);
}

export const findOneCoach = async (data: ICoachSearch) => {
	return await findOne(data);
}

export const findManyCoach = async (data: ICoachSearch[]) => {
	return await findMany(data);
}