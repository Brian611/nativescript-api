import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TopupComponent } from './components/topup/topup.component';
import { SummaryTopupsComponent } from './components/summary-topups/summary-topups.component';
import { SummaryOrdersComponent } from './components/summary-orders/summary-orders.component';
import { SummaryCustomersComponent } from './components/summary-customers/summary-customers.component';
import { DiscountSettingsComponent } from './components/discount-settings/discount-settings.component';
import { SummaryAllTopupsComponent } from './components/summary-all-topups/summary-all-topups.component';
import { SummaryAllOrdersComponent } from './components/summary-all-orders/summary-all-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TopupComponent,
    SummaryTopupsComponent,
    SummaryOrdersComponent,
    SummaryCustomersComponent,
    DiscountSettingsComponent,
    SummaryAllTopupsComponent,
    SummaryAllOrdersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
