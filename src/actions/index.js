import cities from '../../data/cities.js';

export function setCities() {
  return {
    type: "SET_CITIES",
    payload: cities
  };
}

