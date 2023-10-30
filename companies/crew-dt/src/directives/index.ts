import { GraphQLSchema } from 'graphql';
import { loggerDirective } from './logger.directive';
import { validationDirective } from './validation.directive';

export * from './logger.directive';

export const applyDirectives = (schema: GraphQLSchema) => {
	schema = loggerDirective(schema, 'logger');
	schema = validationDirective(schema, 'validation');
	return schema;
};

export const directiveDefs = `#graphql
  directive @logger on FIELD_DEFINITION
	directive @validation(schema: String) on FIELD_DEFINITION
`;