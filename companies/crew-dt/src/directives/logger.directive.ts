import { Request, Response } from 'express';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';
import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';

export const loggerDirective = (schema: GraphQLSchema, directiveName: string) =>
  mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const loggerDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
      if (loggerDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = async (source, args, context: { req: Request; res: Response }, info) => {
          console.log('operation:', info.fieldName, ' args:', args);
          return await resolve(source, args, context, info);
        };
        return fieldConfig;
      }
    },
  });
