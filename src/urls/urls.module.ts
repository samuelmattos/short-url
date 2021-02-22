import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlRepository } from './urls.repository';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';

@Module({
    imports:[TypeOrmModule.forFeature([UrlRepository])],
    providers: [UrlsService],
    controllers: [UrlsController],
})

export class UrlsModule {}
