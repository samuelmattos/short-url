import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUrlDto } from './dtos/create-url.dto';
import { Url } from './urls.entity';
import { UrlRepository } from './urls.repository';

@Injectable()
export class UrlsService {
    constructor(
        @InjectRepository(UrlRepository)
        private UrlRepository: UrlRepository,
    ) { }

    async createUrl(createUrlDto: CreateUrlDto) : Promise<String>{
        if(createUrlDto.originalLink == ''){
            throw new UnprocessableEntityException('O campo url não pode ser vazio.')
        }else{
            return this.UrlRepository.createUrl(createUrlDto);
        }
    }

}
