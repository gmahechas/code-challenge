import express from 'express';
import { json } from 'body-parser';
import { graphqlV1 } from './graphql';
import { notFoundMiddleware } from './middlewares/not-found.middleware';

export const bootstrap = async () => {
	const app = express();
	app.use(json());
	app.set('trust proxy', true);
	app.disable('x-powered-by');
	await graphqlV1(app);
	app.use(notFoundMiddleware);
	return app;
}