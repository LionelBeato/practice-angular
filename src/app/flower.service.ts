import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Flower } from './flower'



@Injectable({
  providedIn: 'root'
})
export class FlowerService {



  url:string = 'https://gist.githubusercontent.com/sandeepcmsm/2e1f5762fa5ca351d8f129e73c730071/raw/30fb98f124445596a2a96f60a233ab13d07167d0/flowers.json'

  getFlowers():Observable<Flower[]>{
    return this.http.get<Flower[]>(this.url)
  }

  constructor(private http:HttpClient) { }
}
