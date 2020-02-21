import { Injectable } from '@angular/core';
import { Person } from './person'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { people } from '../app/people'

@Injectable({
  providedIn: 'root'
})

// this is our service and it is where business logic shoud live
// here we create observables to later subscribe to
export class PersonService {

  // this declares a new people array and equates it to our imported array
  people:Person[] = people


  // this is our observable for the people array
  // note the generic syntax 
  getPeople():Observable<Person[]>{
    return of(this.people)
  }

  // defining our backend url 
  personUrl:string = 'https://gist.githubusercontent.com/dalgard/3651234da390712c04f5/raw/fa56b499c10051af1cfdb9f71f8d9e5595cb3660/peopleMock.json'


  // this is our people json data from the web as an observable
  getPeopleWeb(): Observable<Person[]>{
    return this.http.get<Person[]>(this.personUrl)
  }

  // creating a new httpclient via dependency injection
  // this allows us to use observables
  constructor(private http: HttpClient) {  }
}
