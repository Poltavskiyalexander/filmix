// import { all } from 'core-js/fn/promise';

export default class storage {
  constructor(storage = true) {
    this._storage = storage;
  }

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key) {
    localStorage.removeItem(key);
  }

  has(key) {
    return this.get(key) !== null;
  }

  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  clear() {
    localStorage.clear();
  }

  addDataToLocalStorage(key, dataToAdd) {
    if (this.has(key)) {
      const allValues = this.get(key);
      // console.log(allId);
      if (allValues.includes(dataToAdd)) {
        return;
      } else {
        const newId = [...allValues, dataToAdd];
        this.set(key, newId);
      }
    } else {
      this.set(key, [dataToAdd]);
    }
  }

  checkDataInLocalStorage(key, value) {
    if (this.has(key)) {
      const allValues = this.get(key);
      return true;
    } else {
      return false;
    }
  }

  removeDataFromLocalStorage(key, dataToRemove) {
    const allValues = this.get(key);

    const indexOfChosenData = allValues.indexOf(dataToRemove);
    console.log(indexOfChosenData);

    const newArr = allValues.splice(indexOfChosenData, 1);
    this.set(ID_VALUE, allValues);
    console.log(allValues);
  }
}
//обращение через зис
