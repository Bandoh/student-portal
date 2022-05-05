import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { HttpClient } from "@angular/common/http"
import { student } from '../student';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit {



  regStudent = this.formbuilder.group({
    fname: new FormControl("",[ Validators.required, Validators.minLength(5)]),
    lname: "",
    email: "",
    password: "",
    phone_number: "",
    dob: "",
    level: null,
    hobby: ""
  })

  url = 'http://localhost:1337/api/students'


  constructor(private formbuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    console.log(this.regStudent.value)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
      })
    };

    const st: student = this.regStudent.value


    if(st.fname,st.lname,st.email,st.phone_number,st.dob,st.level,st.password){
      const r = this.http.post(this.url, {
        fname: st.fname,
        lname: st.lname,
        email: st.email,
        phone_number: st.phone_number,
        dob: st.dob,
        level: '"'+st.level+'"',
        password: st.password,
        hobby: st.hobby
      }, httpOptions)
  
  
      r.subscribe((data) => {
        console.log(data)
        
      })

      r.subscribe (data=>alert("Successfully Registered!"), (err)=>alert("An error occured" +err))
      
    }
    else{
      alert("Please ensure all fields have been filled appropriately")
    }


  }

}



