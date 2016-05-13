import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository)
export class Movie {
    Poster = '';
    Title = '';

    constructor(dataRepository) {
        this.dataRepository = dataRepository;
    }
    activate(params) {
        this.id = params.id;
        this.getMovie();
    }
    getMovie() {
        var fetchPromise = this.dataRepository.get(`i=${this.id}`);

        fetchPromise
            .then(result => {
                this.Poster = result.Poster;
                this.Title = result.Title;
            });
    }
}