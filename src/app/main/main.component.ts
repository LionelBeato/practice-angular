import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service'
import { FlowerService } from '../flower.service'
import { Person } from '../person'



@Component({
  selector: 'app-main',
  providers: [FlowerService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  people:Person[]

  // these are get methods that call the service get methods
  // this is a little redundant and may seem convoluted but it helps with seperation of concerns
  getPeeps(){
     this.personService.getPeople()
    .subscribe(p => p)
  }



  getJson(){
    this.personService.getPeopleWeb()
    .subscribe(p => console.log(p))
  }



  // below is an example of dependency injection
  // note that we didnt construct person service in this class
  constructor(private personService: PersonService, private flowerService: FlowerService) { }


flowers 
  // this method will resolve once the component initializes
  // this method is calling the two subscription get methods in this class
  ngOnInit(): void {
    console.log('this component works')
  //  this.getJson()
   // this.getPeeps()

   this.personService.getPeople()
   .pipe(data => data)
   .subscribe(data => this.people = data)
      
   this.flowerService.getFlowers()
   .pipe()
    .subscribe(data => this.flowers = data)

  }

}
