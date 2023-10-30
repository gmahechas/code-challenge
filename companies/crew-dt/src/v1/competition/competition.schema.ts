import { Schema, Document, model } from 'mongoose'
import { ICompetition } from './competition.types';

const schema = new Schema(
	{
		name: {
			type: String,
		},
		code: {
			type: String,
		},
		areaName: {
			type: String,
		},
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

type CompetitionDocument = ICompetition & Document;
export const CompetitionModel = model<CompetitionDocument>('Competition', schema);