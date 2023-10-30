import { Types } from 'mongoose';

export interface ICompetition {
	_id: Types.ObjectId;
	name: string;
	code: string;
	areaName: string;
}

export type ICompetitionInsert = Omit<ICompetition, '_id'>;
export type ICompetitionSearch = Partial<ICompetition>;

export interface ICompetitionKey {
	competitionId: Types.ObjectId;
	competitionCode: string;
}

export interface IImportLeagueInput {
	leagueCode: string;
} 

export interface ICompetitionResponse {
	name: string;
	code: string;
	area: {
		name: string;
	}
}