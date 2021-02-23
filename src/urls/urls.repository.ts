import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateUrlDto } from "./dtos/create-url.dto";
import { Url } from "./urls.entity";
@EntityRepository(Url)
export class UrlRepository extends Repository<Url> {

    async createUrl(createUrlDto: CreateUrlDto): Promise<String> {        
        const { originalLink } = createUrlDto;
        const url = this.create();
        url.originalLink = originalLink;
        url.short = this.hashFnv32a(originalLink);
        try {
            await url.save();
            return url.short;
        } catch (error) {
            throw new InternalServerErrorException(
                'Erro ao gerar a url ',
            );
        }
    }

    hashFnv32a(str) {
        var i, l,
            hval = 0x811c9dc5;
    
        for (i = 0, l = str.length; i < l; i++) {
            hval ^= str.charCodeAt(i);
            hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
        }
        return ("000000000" + (hval >>> 0).toString(16)).substr(-8);
    }
    
}