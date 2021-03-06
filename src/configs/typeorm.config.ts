import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from "dotenv";
//parseInt(process.env.PORT)
dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.PORT_DB),
  username:  process.env.USERDB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  extra: {
    ssl: (process.env.DB_SSL === 'true'? {
      "rejectUnauthorized": false
    }: false) 
  }
};