export const API_URL = 'https://exercisedb.p.rapidapi.com/exercises';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  return fetch(API_URL + url, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
