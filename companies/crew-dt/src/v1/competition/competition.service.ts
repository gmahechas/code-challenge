import { getLeagueByCode, getTeamsByLeagueCode } from '../../services/football-api.service';

import { findMany, findOne, insertOne } from './competition.model';
import { ICompetitionInsert, ICompetitionSearch } from './competition.types';

import { insertOneTeam } from '../team/team.service';
import { insertOnePlayer } from '../player/player.service';
import { insertOneCoach } from '../coach/coach.service';

export const insertOneCompetition = async (data: ICompetitionInsert) => {
	return await insertOne(data);
};

export const findOneCompetition = async (data: ICompetitionSearch) => {
	return await findOne(data);
};

export const findManyCompetition = async (data: ICompetitionSearch []) => {
	return await findMany(data);
}

export const importLeagueByCode = async (leagueCode: string): Promise<boolean> => {
	const league = await findOneCompetition({ code: leagueCode });
	if (league) {
		throw new Error(`league already imported`);
	}

	const newLeague = await getLeagueByCode(leagueCode);
	const { name, code, area } = newLeague;
	const competition = await insertOneCompetition({ name, code, areaName: area.name });

	const teamsByLeague = await getTeamsByLeagueCode(leagueCode);

	for (const team of teamsByLeague.teams) {

		const newTeam = await insertOneTeam({
			name: team.name,
			tla: team.tla,
			shortName: team.shortName,
			areaName: team.area.name,
			address: team.address,
			competition: {
				competitionId: competition._id,
				competitionCode: competition.code,
			}
		});

		if (team.squad && team.squad.length) {
			for (const player of team.squad) {
				const { name, position, dateOfBirth, nationality } = player;
				await insertOnePlayer({
					name,
					position,
					dateOfBirth,
					nationality,
					competition: {
						competitionId: competition._id,
						competitionCode: competition.code,
					},
					team: {
						teamId: newTeam._id,
						teamTla: team.tla
					},
				});
			}
		} else if (team.coach) {
			const { name, dateOfBirth, nationality } = team.coach;
			await insertOneCoach({
				name, dateOfBirth, nationality,
				competition: {
					competitionId: competition._id,
					competitionCode: competition.code,
				},
				team: {
					teamId: newTeam._id,
					teamTla: team.tla
				}
			});
		}
	}

	return true;
}