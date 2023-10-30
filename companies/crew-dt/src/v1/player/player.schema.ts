import { Schema, Document, model, Types } from 'mongoose'
import { IPlayer } from './player.types';

const schema = new Schema(
	{
		name: {
			type: String,
		},
		position: {
			type: String,
		},
		dateOfBirth: {
			type: String,
		},
		nationality: {
			type: String,
		},
		competition: {
			competitionId: {
				type: Types.ObjectId,
				require: true,
			},
			competitionCode: {
				type: String,
			}
		},
		team: {
			teamId: {
				type: Types.ObjectId,
				require: true,
			},
			teamTla: {
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

type PlayerDocument = IPlayer & Document;
export const PlayerModel = model<PlayerDocument>('Player', schema);