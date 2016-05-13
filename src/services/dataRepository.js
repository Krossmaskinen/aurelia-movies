import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class DataRepository {
    baseUrl = 'http://omdbapi.com/?';

    constructor(http) {
        http.configure(config => {
            config
                .withBaseUrl(this.baseUrl)
        });

        this.http = http;
    }
    get(query) {
        return new Promise( (resolve, reject) => {
            this.http.fetch(query)
                .then(response => response.json())
                .then(result => {
                    resolve(result);
                });
        });
    }
}