import 'dotenv/config';

export interface AppConfig {
    BASE_URL: string,
    // API_TOKEN: string,
  }
  
  export default {
    name: 'CoolApp',
    version: '1.0.0',
    extra: {
        BASE_URL: process.env.API_URL,
    //   API_TOKEN: process.env.API_TOKEN,
    },
  };