import { Schema, Document, model, Types } from 'mongoose'
import { ITeam } from './team.types';

const schema = new Schema(
	{
		name: {
			type: String,
		},
		tla: {
			type: String,
		},
		shortName: {
			type: String,
		},
		areaName: {
			type: String,
		},
		address: {
			type: String,
		},
		competition: {
			competitionId: {
				type: Types.ObjectId,
				required: true,
			},
			competitionCode: {
				type: String
			}
		}
	},
	{
		toObject: {
			transform(doc, ret) {
				delete ret.__v;
			},
		},
		toJSON: {
			transform(doc, ret) {
				delete ret.__v;
			},
		},
	},
);

type TeamDocument = ITeam & Document;
export const TeamModel = model<TeamDocument>('Team', schema);