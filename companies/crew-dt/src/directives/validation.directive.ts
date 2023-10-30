import { Request, Response } from 'express';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';
import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';

export const validationDirective = (schema: GraphQLSchema, directiveName: string) =>
	mapSchema(schema, {
		[MapperKind.OBJECT_FIELD]: (fieldConfig) => {
			const authorizationDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
			if (authorizationDirective) {
				const { resolve = defaultFieldResolver } = fieldConfig;
				fieldConfig.resolve = async (source, args, context: { req: Request; res: Response }, info) => {

					const schema = authorizationDirective['schema'];
					console.log(schema);
					if (schema === 'schemaForSearchOneCompetition') {
						if (args.data.code.length < 2) {
							throw new Error('validation error, minimum 2 letter for code');
						}
					}

					return await resolve(source, args, context, info);
				};
				return fieldConfig;
			}
		},
	});
