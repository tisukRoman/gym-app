const EXERCISES_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const EXERCISES_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

const YOUTUBE_URL = 'https://youtube-search-and-download.p.rapidapi.com';
const YOUTUBE_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export class api {
  static async searchYoutubeVideos(temp) {
    return fetch(`${YOUTUBE_URL}/search?query=${temp}`, YOUTUBE_OPTIONS)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async searchExercises(temp) {
    const list = await this.getAllExercises();
    return list.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(temp) ||
        exercise.target.toLowerCase().includes(temp) ||
        exercise.equipment.toLowerCase().includes(temp) ||
        exercise.bodyPart.toLowerCase().includes(temp)
    );
  }

  static async getTargetExercises(target) {
    return fetch(`${EXERCISES_URL}/target/${target}`, EXERCISES_OPTIONS)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async getEquipmentExercises(equipment) {
    return fetch(`${EXERCISES_URL}/equipment/${equipment}`, EXERCISES_OPTIONS)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async getBodyPartExercises(bodyPart) {
    return fetch(`${EXERCISES_URL}/bodyPart/${bodyPart}`, EXERCISES_OPTIONS)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async getAllExercises() {
    return fetch(EXERCISES_URL, EXERCISES_OPTIONS)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async getExerciseById(id) {
    return fetch(`${EXERCISES_URL}/exercise/${id}`, EXERCISES_OPTIONS)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async getBodyParts() {
    return fetch(`${EXERCISES_URL}/bodyPartList`, EXERCISES_OPTIONS)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }
}
