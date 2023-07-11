import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {} // Inject HttpClient here

  login(email: string, password: string): Observable<any> {
    return this.http.post(environment.backendHost+ '/api/auth/login', { email, password }, httpOptions);
  }
}
