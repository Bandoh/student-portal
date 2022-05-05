import { Injectable } from '@angular/core';
import {HttpClient}  from "@angular/common/http"
import { student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {



  url ='http://localhost:1337/api/students'
 enroll(student:student){
  return this.http.post<any>(this.url,student)
}


  constructor(private http:HttpClient) { }
}
