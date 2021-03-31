import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StorageService {

  constructor() {
  }

  getStorage() {
    return localStorage;
  }

  setStringStorage(key: string, value: any) {
    try {
      this.getStorage().setItem(key, value);
    } catch (err) {
      console.log(err);
    }
  }

  getStringStorage(key: string): String {
    try {
      return this.getStorage().getItem(key);
    } catch (err) {
      console.log(err);
    }
  }

  setInStorage(key: string, value: any) {
    try {
      let json = JSON.stringify(value);
      this.getStorage().setItem(key, json);
    } catch (err) {
      console.log(err);
    }
  }

  getInStorage(key: string): any {
    try {
      let data = this.getStorage().getItem(key);
      if (data) {
        return JSON.parse(data);
      } else {
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  }

  clearStorage() {
    this.getStorage().clear();
  }
}