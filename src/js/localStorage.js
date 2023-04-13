export function saveLocal(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error.message);
  }
}

export function loadLocal(key) {
  try {
    const savedData = localStorage.getItem(key);
    return savedData === null ? [] : JSON.parse(savedData);
  } catch (error) {
    console.error(error.message);
  }
}

export function removeLocal(key, id) {
  try {
    const storage = loadLocal(key);
    const movies = [...storage].filter(movie => movie.id !== id);
    localStorage.setItem(key, JSON.stringify(movies));
  } catch (error) {
    console.error(error.message);
  }
}

export function clearLocal() {
  localStorage.clear();
}
