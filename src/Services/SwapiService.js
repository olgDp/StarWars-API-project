export default class SwapiService {
  _apiBase = `https://swapi.co/api`;

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}.`);
    }

    return await res.json();
  };

  getAllPeople = async () => {
    const people = await this.getResource(`/people/`);

    return people.results.map(this._transformPerson);
  };

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}`);

    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const planets = await this.getResource(`/planets/`);

    return planets.results.map(this._transformPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}`);

    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const starships = await this.getResource(`/starships/`);

    return starships.results.map(this._transformStarship);
  };

  getStarship = async id => {
    const starship = await this.getResource(`/starships/${id}`);

    return this._transformStarship(starship);
  };

  _extractId = item => {
    const regExp = /\/([0-9]*)\/$/;
    const id = item.url.match(regExp)[1];

    return id;
  };

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      imgUrl: `https://starwars-visualguide.com/assets/img/characters/`,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      hairColor: person.hair_color,
      height: person.height
    };
  };

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      imgUrl: `https://starwars-visualguide.com/assets/img/planets/`,
      created: planet.created,
      climate: planet.climate,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };

  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      imgUrl: `https://starwars-visualguide.com/assets/img/starships/`,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.rotation_period,
      cargoCapacity: starship.cargo_capacity
    };
  };
}
