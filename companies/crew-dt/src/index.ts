import { bootstrap } from './app';
import { initAxios } from './helpers/axios';
import { initDatabase } from './helpers/database';
import { initEnv } from './helpers/env';
import { createFormatError } from './helpers/error';

const start = async () => {
  await initEnv();
  await initDatabase();
  await initAxios();
  const app = await bootstrap();
  app.listen(5000, () => console.log(`app is runnig on: http://localhost:5000`));
};
start();
