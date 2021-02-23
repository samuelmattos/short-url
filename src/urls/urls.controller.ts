import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CreateUrlDto } from './dtos/create-url.dto';
import { ReturnUrlDto } from './dtos/return-url.dto';
import { UrlsService } from './urls.service';
import { Request, Response } from 'express';
import { Url } from './urls.entity';

@Controller()
export class UrlsController {
    constructor(private urlsService: UrlsService) { }

    @Post('encurtador')
    async createUrl(
        @Body() createUrlDto: CreateUrlDto, @Req() request: Request
    ): Promise<ReturnUrlDto> {
        const urlFind = await this.urlsService.createUrl(createUrlDto);
        var newUrl = request.protocol + '://' + request.get('host') +'/'+ urlFind;
        return {
            newUrl
        }
    }
    @Get('**********')
    async getUrl(@Req() request: Request, @Res() response: Response) {
        //  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        var path = request.path
        var short = path.replace('/', '');
        const url = await this.urlsService.getUrl(short);
        if (url) {           
            response.status(301).redirect(url.originalLink);
            return url.originalLink;
        }
        response.status(404).send('Url não encontrada');
    }
}
