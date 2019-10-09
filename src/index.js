
class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    };
    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    };
    getPeople(id) {
        return this.getResource(`/people/${id}`);
    };
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    };
    getPlanet(id) {
        return this.getResource(`/planets/${id}`);
    };
    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    };
    getStarships(id) {
        return this.getResource(`/starships/${id}`);
    };
};

const swapi = new SwapiService();

//tests
swapi.getAllPeople().then((people) => {
    people.forEach((p) => {
        console.log(p.name);
    });
});
swapi.getAllPlanets().then((planet) => {
    planet.forEach((p) => {
        console.log(p.name);
    });
});
swapi.getAllStarships().then((ship) => {
    ship.forEach((p) => {
        console.log(p.name);
    });
});
