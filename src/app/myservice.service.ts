import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  persons:String[]=['max','manuel','anna'];
  person
  constructor(private http:HttpClient) { }
  removePerson(name:String){
    this.persons=this.persons.filter(person=>{
      return person!==name;
    });
    console.log(this.persons);
  }
  fetchDate(v:String){
    return this.http.get<any>('https://api.adviceslip.com/advice/search/'+v);
  }
}
