export const planets = [
  {id: 1, title: 'Jupiter'},
  {id: 2, title: 'Saturn'},
  {id: 3, title: 'Uranus'},
  {id: 4, title: 'Neptune'},
];

export const moons = [
  {id: 1, planetId: 1, title: 'Ganymede'},
  {id: 2, planetId: 1, title: 'Callisto'},
  {id: 3, planetId: 1, title: 'Io'},
  {id: 4, planetId: 1, title: 'Europa'},
  {id: 5, planetId: 2, title: 'Titan'},
  {id: 6, planetId: 2, title: 'Rhea'},
  {id: 7, planetId: 2, title: 'Iapetus'},
  {id: 8, planetId: 2, title: 'Dione'},
  {id: 9, planetId: 3, title: 'Titania'},
  {id: 10, planetId: 3, title: 'Oberon'},
  {id: 11, planetId: 3, title: 'Umbriel'},
  {id: 12, planetId: 3, title: 'Ariel'},
  {id: 13, planetId: 3, title: 'Miranda'},
  {id: 14, planetId: 4, title: 'Triton'},
  {id: 15, planetId: 4, title: 'Proteus'},
  {id: 16, planetId: 4, title: 'Nereid'},
];

export const handleInitActivePlanets = (planets) => planets.map((planet) => ({...planet, active: 0}));

export const handleInitActiveMoons = (moons) => moons.map((moon) => ({...moon, active: false}));

export const getUpdatedMoonsData = (moons, clickedMoon) =>
  moons.map((moon) => (moon.id === clickedMoon.id ? {...moon, active: !moon.active} : moon));

export const getUpdatedPlanetsData = (planets, clickedMoon) =>
  planets.map((planet) =>
    planet.id === clickedMoon.planetId ? {...planet, active: planet.active + (clickedMoon.active ? -1 : 1)} : planet
  );
