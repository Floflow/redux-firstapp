import cities from '../../data/cities.js';

export function setCities() {
  return {
    type: "SET_CITIES",
    payload: cities
  };
}

export function setActiveCity(city) {
  return {
    type: "SET_ACTIVECITY",
    payload: city
  };
}
