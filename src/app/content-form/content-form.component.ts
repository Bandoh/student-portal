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
  dob: 0,
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


      const r = this.http.post(this.url,this.student, httpOptions)

let currentDate = new Date().getFullYear()
let userDate = new Date(this.student.dob).getFullYear()


if(this.student.dob ==0 ) alert("Please input your date of birth")
else if (currentDate - userDate <15 ) {alert("Please enter a valid date of birth"); console.log(Date.now());}
else if (this.student.level == "") alert("Please select your level")
else{
  r.subscribe((res) => {
    const {status,message,data}:any = res;
    if(status == "failed"){
      if (message['path']){
        alert("The "+message['path'] +" field must be unique")
      }else
      alert((message))
    }
    else{
      console.log(data)
      alert("Successfully registered user"+ data['attributes']['fname']+" "+ data['attributes']['lname'] )
    }
    
  })


}
  
    

  
      
    }


}



