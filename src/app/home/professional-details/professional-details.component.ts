import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss']
})
export class ProfessionalDetailsComponent implements OnInit {

  professionalDetls : FormGroup ;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initFormDetls()
  }

  initFormDetls(){
  this.professionalDetls = this.fb.group({
     'sTypeOfProfession':['',[Validators.required]],
     'sSkillName':[''],
     'proficiency':[''],
     'experienceInYears':['',[Validators.required,Validators.minLength(0),Validators.maxLength(50)]],
     'employerName':['',[Validators.required]],
     'officeEmail':['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]]
  })
  }

  saveDetls(){
    console.log('formVal',this.professionalDetls.value);
  }
}
