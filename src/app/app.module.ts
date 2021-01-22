import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { MagicGetterSetterComponent } from './magic-getter-setter/magic-getter-setter.component';
import { HeaderComponent } from './header/header.component';
// import { PersonGetterSetter } from './shared/persion-setter-getter.model';
@NgModule({
  declarations: [
    AppComponent, FizzBuzzComponent, FibonacciComponent, MagicGetterSetterComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
