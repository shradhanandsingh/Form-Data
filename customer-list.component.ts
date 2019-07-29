import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  myForm;
  constructor() {
    this.myForm = new FormGroup({
      firstname: new FormControl('', [Validators.required,Validators.maxLength(7)]),
      lastname: new FormControl('',Validators.required),
      address: new FormGroup({
        city: new FormControl('',Validators.required),
        state: new FormControl('',Validators.required),
      })
    });
 
  }
  save(){
    console.log(this.myForm.value)
  }


  ngOnInit() {
  }

}
