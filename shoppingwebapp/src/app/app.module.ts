import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages/module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux'
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGaurd } from './guards/auth.guard';

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

import { IAppState, rootReducer, INITIAL_STATE } from './store';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'topup', component: TopupComponent, pathMatch: 'full', canActivate: [AuthGaurd] },
  { path: 'summarytopups', component: SummaryTopupsComponent, pathMatch: 'full', canActivate: [AuthGaurd] },
  { path: 'summaryorders', component: SummaryOrdersComponent, pathMatch: 'full', canActivate: [AuthGaurd] },
  { path: 'summarycustomers', component: SummaryCustomersComponent, pathMatch: 'full', canActivate: [AuthGaurd] },
  { path: 'settings', component: DiscountSettingsComponent, pathMatch: 'full', canActivate: [AuthGaurd] },
  { path: 'product', component: ProductComponent, pathMatch: 'full', canActivate: [AuthGaurd] },
  { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGaurd] },
  { path: 'cart', component: CartComponent, pathMatch: 'full', canActivate: [AuthGaurd] }
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
    FlashMessagesModule,
    NgReduxModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ValidateService, AuthService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
