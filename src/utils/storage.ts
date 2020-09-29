export class LocalStorage {
  private static instance: LocalStorage;
  private localStorage = localStorage;

  private constructor() {}

  public static getInstance() {
    if (!LocalStorage.instance) {
      LocalStorage.instance = new LocalStorage();
    }
    return LocalStorage.instance;
  }

  public setObj<T extends unknown>(key: string, data: T) {
    this.localStorage.setItem(key, JSON.stringify(data));
  }

  public setItem(key: string, data: string) {
    this.localStorage.setItem(key, data);
  }

  public getObj(key: string): {[key: string]: string} {
    const data = this.localStorage.getItem(key);

    if (!data) {
      return {};
    }

    try {
      return JSON.parse(data);
    } catch {
      return {};
    }
  }

  public getArr(key: string): any[] {
    const data = this.getObj(key);
    if (Array.isArray(data)) {
      return data;
    }
    return [];
  }

  public setItemByMap(data: {[key: string]: any}) {
    for (const [key, value] of Object.entries(data)) {
      this.localStorage.setItem(key, value);
    }
  }

  public getItem(key: string) {
    const data = this.localStorage.getItem(key);
    if (!data) return '';
    return data;
  }

  public removeItem(key: string) {
    this.localStorage.removeItem(key);
  }

  public clear() {
    this.localStorage.clear();
  }
}

export const storage = LocalStorage.getInstance();
