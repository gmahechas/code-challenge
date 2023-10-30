import { Types } from 'mongoose';
import { ICompetitionKey } from '../competition/competition.types';
import { ITeamKey } from '../team/team.types';

export interface ICoach {
	_id: Types.ObjectId;
	name: string;
	dateOfBirth: string;
	nationality: string;
	competition: ICompetitionKey;
	team: ITeamKey;
}

export type ICoachInsert = Omit<ICoach, '_id'>;
export type ICoachSearch = Partial<ICoach>;