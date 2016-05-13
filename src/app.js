export class App {
    constructor() {
        this.message = 'app running';
    }
    configureRouter(config, router) {
        this.router = router;

        config.title = 'Movies';
        config.map([
            { route: ['', 'movies'], moduleId: 'movies/movies', title: 'Movies' },
            { route: 'movie/:id', moduleId: 'movies/movie', title: 'Movie', name: 'movie' }
        ]);
    }
}