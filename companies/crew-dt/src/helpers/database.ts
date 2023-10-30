import mongoose from 'mongoose';

export const initDatabase = async () => {
	const dbUri = process.env.DB_URL;
	if (!dbUri) {
		throw new Error('DB_URL is not defined');
	}
	await mongodbConnect(dbUri, {});
};

export const mongodbConnect = (uri: string, connectOptions: mongoose.ConnectOptions) => {
	mongoose.connect(uri, connectOptions);
	const mongooseConnection = mongoose.connection;
	mongooseConnection.on('connecting', () => console.log(`connecting to mongodb`));
	mongooseConnection.on('connected', () =>
		console.log(`mongodb connected to: ${mongooseConnection.host}:${mongooseConnection.port}/${mongooseConnection.name}`),
	);
	mongooseConnection.on('disconnecting', () => console.log(`disconnecting mongodb`));
	mongooseConnection.on('disconnected', () => console.log(`mongodb disconnected`));
	mongooseConnection.on('close', () => console.log(`mongodb connection closed`));
	mongooseConnection.on('reconnected', () => console.log(`mongodb reconnected`));
	mongooseConnection.on('error', () => console.log(`mongodb error`));
	mongooseConnection.on('fullsetup', () => console.log(`fullsetup`));
	mongooseConnection.on('all', () => console.log(`all`));
	mongooseConnection.on('reconnectFailed', () => console.log(`reconnectFailed`));
	return mongooseConnection.asPromise();
};