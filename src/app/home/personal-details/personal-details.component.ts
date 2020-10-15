import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  personalDetls : FormGroup ;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.personalDetls = this.fb.group({
      fullName : ['',[Validators.required,Validators.minLength(1),Validators.maxLength(50),Validators.pattern("^[a-z A-Z]{1,50}$")]],
      email : ['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[789]{1}[0-9]{9}")]],
      dob:['',[Validators.required]],
      address:['',[Validators.required]]
    })
  }
  

  onFormSubmit(){
   console.log('formVal',this.personalDetls.value);
  }

}
