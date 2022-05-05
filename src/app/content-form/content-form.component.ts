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

  url = 'http://localhost:1337/api/students'


//setting initial value for our student data
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


//making an instance of the HTTPCLient for http requests
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }


//called when register button is pressed
  onSubmit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
      })
    };


const r = this.http.post(this.url,this.student, httpOptions)

let currentDate = new Date().getFullYear()
let userDate = new Date(this.student.dob).getFullYear()


if(this.student.dob ==0 ) alert("Please input your date of birth") //validating if user selected a date of birth
else if (currentDate - userDate <15 ) {alert("Please enter a valid date of birth"); console.log(Date.now());} //validating if user is more than 15 years old
else if (this.student.level == "") alert("Please select your level") //checking if a level has been selescted
else{

  //if all validations have been passed then send the post request to the URL
  r.subscribe((res) => {
    const {status,message,data}:any = res; //destructure res variable into respective variables
    if(status == "failed"){
      if (message['path']){ //check if path is in data , if yes then it means a validation error from the backend .....example is rejected data due to unique constraints.
        alert("The "+message['path'] +" field must be unique")
      }else
      alert((message))
    }
    else{
      alert("Successfully registered user"+ data['attributes']['fname']+" "+ data['attributes']['lname'] )
    }
    
  })


}
  
    

  
      
    }


}



