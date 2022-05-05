import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Student } from '../student';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css'],
  
})
export class ContentFormComponent implements OnInit {

  // url = 'http://192.168.0.199:1337/api/students'

  url = 'http://localhost:1337/api/students'
student :Student= {
  fname:"",
  level:"",
  lname:"",
  dob:new Date(Date.now()),
  hobby:"",
  password:"",
  email:"",
  phone_number:""
}


  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }



  onSubmit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
      })
    };


    console.log(this.student)




      const r = this.http.post(this.url,this.student, httpOptions)
  
  
      // r.subscribe((data) => {
      //   console.log(data)
        
      // })

      r.subscribe (data=>alert("Successfully Registered!"), (err)=>alert("An error occured" +err))
      
    }


}



