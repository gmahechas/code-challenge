import { Request, Response } from 'express';

export const notFoundMiddleware = (request: Request, response: Response) => response.status(404).send('url not found').end();
