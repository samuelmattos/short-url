import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateUrlDto } from './dtos/create-url.dto';
import { ReturnUrlDto } from './dtos/return-url.dto';
import { UrlsService } from './urls.service';
import { Request } from 'express';
import { Url } from './urls.entity';

@Controller()
export class UrlsController {
    constructor(private urlsService: UrlsService) { }

    @Post('urls')
    async createUrl(
        @Body() createUrlDto: CreateUrlDto,
    ): Promise<ReturnUrlDto> {
        const newUrl = await this.urlsService.createUrl(createUrlDto);
        return {
            newUrl
        }
    }
    @Get('**********')
    async getUrl(@Req() request: Request) {
        //  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        var path = request.path
        var short = path.replace('/', '');
        const url = await this.urlsService.getUrl(short);
        if (url) {
            return url.originalLink;
        }

        return 'Favor passar um shor';

    }
}
