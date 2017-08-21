import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent }  from './Components/user.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,HttpModule],
     declarations: [UserComponent ],
     bootstrap: [UserComponent ]
})
export class AppModule { }
