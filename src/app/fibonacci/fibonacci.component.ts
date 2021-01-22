import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputData: number;
  outputData: number;
  outputSeries: any = '';
  errorInput: boolean = false;
  constructor() { }

  getFibonacci() {
    //seed values F(0)=0 and F(1)=1
    let preNum = 0;
    let curNum = 1;
    this.errorInput = false;
    if(this.inputData == 0) {
      this.outputData = preNum;
      this.outputSeries = preNum;
    } else if(this.inputData == 1) {
      this.outputData = curNum;
      this.outputSeries = preNum+', '+curNum;;
    } else if(this.inputData >1){
      //Iteration for F(2) and above
      this.outputSeries = preNum+', '+curNum;
      for(let i=0; i<=this.inputData-2; i++) {
        let temNum = preNum + curNum;
        preNum = curNum;
        curNum = temNum;
        this.outputSeries = this.outputSeries+', '+curNum;
      }
      this.outputData = curNum;
    } else {
      this.errorInput = true;
    }
    
  }
}

