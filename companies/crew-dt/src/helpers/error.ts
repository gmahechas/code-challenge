import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { unwrapResolverError } from '@apollo/server/errors';
import { AxiosError } from 'axios';

export const createFormatError = (formattedError: GraphQLFormattedError, error: unknown): any => {

	const unwrapedError = unwrapResolverError(error);

	if (unwrapedError instanceof AxiosError && unwrapedError.response) {
		if (unwrapedError.response.status === 404) {
			return 'The resource does not exit';
		}
		if (unwrapedError.response.status === 403) {
			return 'The resource is restricted, please pay a subscription';
		}
	}

	if (unwrapedError instanceof GraphQLError) {
		return 'GraphQL error';
	}

	if (unwrapedError instanceof Error) {
		return unwrapedError.message;
	}

	return 'Unknown error';
};
