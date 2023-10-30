import { Types } from 'mongoose';
import { ICompetitionKey } from '../competition/competition.types';
import { ITeamKey } from '../team/team.types';

export interface IPlayer {
	_id: Types.ObjectId;
	name: string;
	position: string;
	dateOfBirth: string;
	nationality: string;
	competition: ICompetitionKey;
	team: ITeamKey;
}

export type IPlayerInsert = Omit<IPlayer, '_id'>;
export type IPlayerSearch = Partial<IPlayer>;
export type IPlayerSearchByLeagueCode = {
	leagueCode: string
};