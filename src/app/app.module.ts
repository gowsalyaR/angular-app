import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { SpendDetailsComponent } from './spend-details/spend-details.component';
import { InvestDetailsComponent } from './invest-details/invest-details.component';
import { BalanceDetailsComponent } from './balance-details/balance-details.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MainDetailsComponent } from './main-details/main-details.component';
import { LoginDetailsComponent } from './login-details/login-details.component';





@NgModule({
  declarations: [
    AppComponent,
    SpendDetailsComponent,
    InvestDetailsComponent,
    BalanceDetailsComponent,
    ChangePassComponent,
    MainDetailsComponent,
    LoginDetailsComponent  ],
  imports: [
    BrowserModule,AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,
    MatButtonModule,MatDividerModule,
    MatIconModule,MatSidenavModule,
    MatDatepickerModule,MatFormFieldModule,
    MatInputModule,MatNativeDateModule,
    FormsModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }