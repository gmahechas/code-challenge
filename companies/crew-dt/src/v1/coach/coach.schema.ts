import { Schema, Document, model, Types } from 'mongoose'
import { ICoach } from './coach.types';

const schema = new Schema(
	{
		name: {
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
				required: true,
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
				type: String,
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

type CoachDocument = ICoach & Document;
export const CoachModel = model<CoachDocument>('Coach', schema);