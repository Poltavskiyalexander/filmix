export default class LocalStorage {
  constructor() {}

  set(key, value) {
    localStorage.setItem(key, value);
  }

  remove(key) {
    localStorage.removeItem(key);
  }

  has(key) {
    return this.get(key) !== null;
  }

  get(key) {
    return localStorage.getItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

// const ls = new LocalStorage();

// ls.
