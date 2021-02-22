import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateUrlDto } from "./dtos/create-url.dto";
import { Url } from "./urls.entity";

@EntityRepository(Url)
export class UrlRepository extends Repository<Url> {

    async createUrl(createUrlDto: CreateUrlDto): Promise<Url> {
        const { short, originalLink } = createUrlDto;
        const url = this.create();
        url.originalLink = originalLink;
        url.short = 'short';
        try {
            await url.save();
            return url;
        } catch (error) {
            throw new InternalServerErrorException(
                'Erro ao gerar a url ',
            );
        }
    }
}