import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ApiProvider {

  constructor(
    private http: HttpClient,
  ) {
  }

  _addHeader(): any {
    let headers = {
      "Content-Type": "application/json",
    };
    return {
      headers: new HttpHeaders(headers)
    }
  }

  async get<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this.http.get(url, this._addHeader())
        .subscribe((response: any) => {
          resolve(response)
        }, (err) => {
          reject(err);
        }).unsubscribe;
    });
  }

  async post<T>(url: string, payload: any): Promise<T> {
    return new Promise((resolve, reject) => {
      this.http.post(url, payload, this._addHeader())
        .subscribe((response: any) => {
          resolve(response)
        }, (err) => {
          reject(err);
        }).unsubscribe;
    });
  }

  async put<T>(url: string, payload?: any): Promise<T> {
    return new Promise((resolve, reject) => {
      this.http.put(url, payload, this._addHeader())
        .subscribe((response: any) => {
          resolve(response)
        }, (err) => {
          reject(err);
        }).unsubscribe;
    });
  }

  async patch<T>(url: string, payload?: any): Promise<T> {
    return new Promise((resolve, reject) => {
      this.http.patch(url, payload, this._addHeader())
        .subscribe((response: any) => {
          resolve(response)
        }, (err) => {
          reject(err);
        }).unsubscribe;
    });
  }

  async delete<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this.http.delete(url, this._addHeader())
        .subscribe((response: any) => {
          resolve(response)
        }, (err) => {
          reject(err);
        }).unsubscribe;
    });
  }
}