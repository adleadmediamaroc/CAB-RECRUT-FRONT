import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  StaffDTO } from '../models/Staff';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StaffService {


  constructor(private http: HttpClient) {}



  addNewStaff(staff: StaffDTO): Observable<any> {

    return this.http.post(environment.backendHost+"/profile/staffs", staff);
  }


}


