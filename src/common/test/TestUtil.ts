import { Url } from "./../../urls/urls.entity";

export default class TestUtil {
    static giveMeAValidUrl() : Url {
        const url = new Url();
        url.originalLink = 'www.google.com.br'
        url.short = url.hashFnv32a(url.originalLink);
        return url;
    }
}