export default class storage {
  constructor(storage = true) {
    this._storage = storage;
  }

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
