import { Component, OnInit } from '@angular/core';
import { PersonGetterSetter } from './../shared/persion-setter-getter.model';

@Component({
  selector: 'magic-getter-setter',
  templateUrl: './magic-getter-setter.component.html',
  styleUrls: ['./magic-getter-setter.component.css']
})
export class MagicGetterSetterComponent {

  person: PersonGetterSetter;
  showDetails: boolean = false;
  age: number;
  isError: boolean = false;
  errorMsg: string = '';
  constructor() { 
    this.person = new PersonGetterSetter();
  }
  
  setAge() {
    this.isError = false;
    this.errorMsg = '';
    try {
      //set age
      this.person.age = this.age;
    } catch (error) {
      this.isError = true;
      this.errorMsg = error;
    }
    
  }
  
  }


