import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service'
import { Person } from '../person'



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  people: Person[] = [
    
  ]


  getPeeps(){
    this.personService.getPeople()
    .subscribe(p => this.people = p)
  }

  getJson(){
    this.personService.getPeopleWeb()
    .subscribe(p => console.log(p))
  }

  constructor(private personService: PersonService) { }



  ngOnInit(): void {
    console.log('this component works')
   this.getJson()
  }

}
