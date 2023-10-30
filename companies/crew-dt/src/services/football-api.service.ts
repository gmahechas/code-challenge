import axios from 'axios'
import { ICompetitionResponse } from '../v1/competition/competition.types';
import { ITeamResponse } from '../v1/team/team.types';

export const getLeagueByCode = async (leagueCode: string): Promise<ICompetitionResponse> => {
	const request = await axios.get<ICompetitionResponse>(`/competitions/${leagueCode}`);
	return request.data;
}

export const getTeamsByLeagueCode = async (leagueCode: string): Promise<ITeamResponse> => {
	const request = await axios.get<ITeamResponse>(`/competitions/${leagueCode}/teams`);
	return request.data;
}