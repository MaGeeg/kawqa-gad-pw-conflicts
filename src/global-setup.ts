import baseURL from '../playwright.config';
import { logConsole } from '@_src_api/utils/log-levels';
import * as dotenv from 'dotenv';

async function globalSetup(): Promise<void> {
  dotenv.config({ override: true });
  if (baseURL === undefined) throw new Error('⚠️  URL: is undefined');
  logConsole('⚠️  URL:', process.env.BASE_URL);
}

export default globalSetup;
