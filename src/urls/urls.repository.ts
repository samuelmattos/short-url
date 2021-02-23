import { InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateUrlDto } from "./dtos/create-url.dto";
import { Url } from "./urls.entity";
@EntityRepository(Url)
export class UrlRepository extends Repository<Url> {

    async createUrl(createUrlDto: CreateUrlDto): Promise<String> {
        const { originalLink } = createUrlDto;
        var urlteste = new Url();
        const short = urlteste.hashFnv32a(originalLink);
        const urlFind = await this.getUrl(short);
        if(urlFind){
            return urlFind.short;
        }
        const url = this.create();
        url.originalLink = originalLink;
        url.short = short;
        try {
            await url.save();
            return url.short;
        } catch (error) {
            throw new InternalServerErrorException(
                'Erro ao gerar a url '+error,
            );
        }
    }
    async getUrl(short: String): Promise<Url> {
        
        const rawData = await this.query('SELECT "originalLink", "expireDate", "expireDate" + 2  FROM url a WHERE short like \''+short+'\' AND "expireDate" + 2 >= current_timestamp');
        if(!rawData[0]){
           return null;
        }
       
        const url =  this.findOne({
            where: {
                short,
            },
          });
        try {
            return url;
        } catch (error) {
            throw new InternalServerErrorException(
                'Erro ao gerar a url ',
            );
        }
    }  
    
}