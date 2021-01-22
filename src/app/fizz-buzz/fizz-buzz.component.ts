import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent {
  start: number;
  end: number;
  outputData: string = '';
  isError: boolean = false;
  invalidRange: boolean = false;
  constructor() { }

  getFizzBuzz() {
    this.outputData = '';
    this.isError = false;
    this.invalidRange = false;
    if(this.start > this.end || (!this.start&& this.start !=0) || (!this.end && this.end !=0)) {
      this.isError = true;
      return;
    }
    if(this.start<1 || this.end>20) {
      this.invalidRange = true;
      return;
    }
    for(let i=this.start; i<=this.end; i++) {
        this.outputData = this.outputData+((i%3 ? '' : 'Fizz' ) + ( i%5 ? '' : 'Buzz' ) || `${i}`)+( i==this.end ? '' : ', ');
    }
    
  }
}

