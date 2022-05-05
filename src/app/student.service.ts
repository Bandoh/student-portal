import { Injectable } from '@angular/core';
import {HttpClient}  from "@angular/common/http"
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {



  url ='http://localhost:1337/api/students'
 enroll(student:Student){
  return this.http.post<any>(this.url,student)
}


  constructor(private http:HttpClient) { }
}
