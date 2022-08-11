const EXERCISES_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const EXERCISES_HEADERS = {
  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
};

export class api {
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

  static async getBodyPartExercises(bodyPart) {
    return fetch(`${EXERCISES_URL}/bodyPart/${bodyPart}`, {
      headers: EXERCISES_HEADERS,
      method: 'GET',
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async getAllExercises() {
    return fetch(EXERCISES_URL, {
      headers: EXERCISES_HEADERS,
      method: 'GET',
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async getExerciseById(id) {
    return fetch(`${EXERCISES_URL}/exercise/${id}`, {
      headers: EXERCISES_HEADERS,
      method: 'GET',
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async getBodyParts() {
    return fetch(`${EXERCISES_URL}/bodyPartList`, {
      headers: EXERCISES_HEADERS,
      method: 'GET',
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }
}
