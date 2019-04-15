import { Component, OnInit, OnChanges } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,OnChanges {
  descrip;
  wait:boolean=false;
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
     console.log('changes');
  }
  ngOnInit(): void {
     console.log('ngoninit');
      }
student:String[]=['nimal','kamal','yohan'];
personList:String[];
constructor(private myne:MyserviceService){
  this.personList=myne.persons;
 
}
removearr(){
  this.student.pop();
  console.log(this.student);
}
onRemovePerson(personName:String){
this.myne.removePerson(personName);
this.personList=this.myne.persons;
console.log(this.personList);
}
getpeople(as:String){
  this.wait=true;
   this.myne.fetchDate(as).subscribe(resdate=>{
    this.descrip=resdate.slips;
    if(this.descrip==null){
      this.descrip=[{advice:"nothing",slipId:23}];
    }
    console.log(this.descrip);
    this.wait=false;
   });
  
   
}
}
