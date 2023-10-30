import { Types } from 'mongoose';
import { ICompetitionKey } from '../competition/competition.types';

export interface ITeam {
	_id: Types.ObjectId;
	name: string;
	tla: string;
	shortName: string;
	areaName: string;
	address: string;
	competition: ICompetitionKey;
}

export type ITeamInsert = Omit<ITeam, '_id'>;
export type ITeamSearch = Partial<ITeam>;

export interface ITeamKey {
	teamId: Types.ObjectId;
	teamTla: string;
}

export interface ITeamResponse {
	teams: {
		name: string;
		tla: string;
		shortName: string;
		area: {
			name: string;
		};
		address: string;
		coach: {
			name: string;
			dateOfBirth: string;
			nationality: string;
		};
		squad: {
			name: string;
			position: string;
			dateOfBirth: string;
			nationality: string;
		}[];
	}[];
}