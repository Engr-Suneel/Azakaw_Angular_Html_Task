import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })

export class UserProfileService {
    constructor(private http: HttpClient) { }

    getAll() {
      return this.http.get<User[]>(`/api/login`);
    }
}
