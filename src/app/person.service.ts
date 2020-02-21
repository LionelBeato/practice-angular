import { Injectable } from '@angular/core';
import { Person } from './person'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { people } from '../app/people'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  people:Person[] = people

  getPeople():Observable<Person[]>{
    return of(this.people)
  }

  personUrl:string = 'https://gist.githubusercontent.com/dalgard/3651234da390712c04f5/raw/fa56b499c10051af1cfdb9f71f8d9e5595cb3660/peopleMock.json'

  getPeopleWeb(): Observable<Person[]>{
    return this.http.get<Person[]>(this.personUrl)
  }

  constructor(private http: HttpClient) {  }
}
