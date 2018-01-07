import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages/module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TopupComponent } from './components/topup/topup.component';
import { SummaryTopupsComponent } from './components/summary-topups/summary-topups.component';
import { SummaryOrdersComponent } from './components/summary-orders/summary-orders.component';
import { SummaryCustomersComponent } from './components/summary-customers/summary-customers.component';
import { DiscountSettingsComponent } from './components/discount-settings/discount-settings.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'topup', component: TopupComponent, pathMatch: 'full' },
  { path: 'summarytopups', component: SummaryTopupsComponent, pathMatch: 'full' },
  { path: 'summaryorders', component: SummaryOrdersComponent, pathMatch: 'full' },
  { path: 'summarycustomers', component: SummaryCustomersComponent, pathMatch: 'full' },
  { path: 'settings', component: DiscountSettingsComponent, pathMatch: 'full' },
  { path: 'product', component: ProductComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent, pathMatch: 'full' }
]

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
    ProductComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
