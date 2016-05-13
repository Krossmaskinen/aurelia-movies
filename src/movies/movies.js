import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository, Router)
export class Movies {
    placeholderImage = 'images/void.jpg';

    constructor(dataRepository, router) {
        this.dataRepository = dataRepository;
        this.searchQuery = '';
        this.movies = [];
        this.router = router;
    }
    startLoading() {
        this.isLoading = true;
    }
    stopLoading() {
        this.isLoading = false;
    }
    getMovies() {
        var fetchPromise = this.dataRepository.get(`s=${this.searchQuery}`);

        this.startLoading();
        fetchPromise.then(result => {
            this.stopLoading();
            this.movies = result.Search;
            this.movies.forEach(movie => {
                movie.detailUrl = this.router.generate('movie', {id: movie.imdbID});

                if (movie.Poster === 'N/A')
                    movie.Poster = this.placeholderImage;
            });
        });
    }
}