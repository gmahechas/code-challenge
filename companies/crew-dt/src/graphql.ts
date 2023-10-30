import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { v1Resolvers, v1TypeDefs } from './v1';
import { createFormatError } from './helpers/error';
import { applyDirectives } from './directives';

export const graphqlV1 = async (app: express.Express) => {
	let schema = makeExecutableSchema({ typeDefs: v1TypeDefs, resolvers: v1Resolvers });
	schema = applyDirectives(schema);
	const graphql = new ApolloServer({
		schema,
		includeStacktraceInErrorResponses: false,
		formatError: (formattedError, error) => createFormatError(formattedError, error),
	});
	await graphql.start();
	app.use('/graphql/v1', expressMiddleware(graphql, {
		context: async ({ req, res }) => ({ req, res }),
	}));
};