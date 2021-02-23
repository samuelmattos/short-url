import { Injectable, UnprocessableEntityException, NotFoundException } from '@nestjs/common';
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

    async getUrl(short: String) : Promise<Url>{
        if(short.length < 5  || short.length > 10){
            throw new NotFoundException('O encurtador tem que ser um valor entre 5 e 10 caracteres.'+short)
        }else{
            return this.UrlRepository.getUrl(short);
        }
    }

}
