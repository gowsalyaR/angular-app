import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpendDetailsComponent } from './spend-details/spend-details.component';
import { InvestDetailsComponent } from './invest-details/invest-details.component';
import { BalanceDetailsComponent } from './balance-details/balance-details.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { MainDetailsComponent } from './main-details/main-details.component';
import { AppComponent } from './app.component';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { SigninDetailsComponent } from './signin-details/signin-details.component';

const routes: Routes = [
  
  {
    path: 'main-details', component: MainDetailsComponent, 
    children: [
      { path: 'spend-details', component: SpendDetailsComponent },
      { path: 'invest-details', component: InvestDetailsComponent },
      { path: 'balance-details', component: BalanceDetailsComponent },
      { path: 'change-pass', component: ChangePassComponent },
    ]
  },
  { path: 'login-details', component: LoginDetailsComponent },
  {path:'signin-details',component:SigninDetailsComponent},
  { path: '', redirectTo: 'login-details', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
