import { Body, Controller, Post } from '@nestjs/common';
import { CreateUrlDto } from './dtos/create-url.dto';
import { ReturnUrlDto } from './dtos/return-url.dto';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
    constructor(private urlsService: UrlsService) { }

    @Post()
    async createUrl(
        @Body() createUrlDto: CreateUrlDto,
    ): Promise<ReturnUrlDto> {
        const newUrl = await this.urlsService.createUrl(createUrlDto);
        return {
            newUrl
        }
    }
}
