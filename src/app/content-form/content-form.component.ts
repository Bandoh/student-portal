import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {HttpClient}  from "@angular/common/http"

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit {



regStudent = this.formbuilder.group({
  fname:"",
  lname:"",
  email:"",
  password:"",
  phone_number:"",
  dob:"",
  level:null,
  hobby:""
})



  constructor( private formbuilder:FormBuilder, private http :HttpClient) { }

  ngOnInit(): void {
  }
  

   onSubmit(): void{
    console.log(this.regStudent.value)
    this.http.post("", this.regStudent.value)
  }

}



