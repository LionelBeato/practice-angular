import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  personForm = new FormGroup ({
    name: new FormControl(''),
    phone: new FormControl('')
  })

  showInfo(){
    console.log('person submitted')
    console.log(this.personForm.controls["name"].value)
  }




  constructor(private router:Router) { }



  ngOnInit(): void {
    console.log(name)
  }



}
