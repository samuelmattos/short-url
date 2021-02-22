import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UrlsModule } from './urls/urls.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UrlsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
