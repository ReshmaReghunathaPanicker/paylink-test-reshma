import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { MagicGetterSetterComponent } from './magic-getter-setter/magic-getter-setter.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'fizzbuzz'
  },
  {
      path: 'fizzbuzz',
      component: FizzBuzzComponent
  }, 
  {
    path: 'fibonacci',
    component: FibonacciComponent
  }, 
  {
    path: 'magic',
    component: MagicGetterSetterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
