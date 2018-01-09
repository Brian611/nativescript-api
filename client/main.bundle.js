webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n  <div class=\"starter-template\">\n    <app-navbar></app-navbar>\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n  </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_topup_topup_component__ = __webpack_require__("../../../../../src/app/components/topup/topup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_summary_topups_summary_topups_component__ = __webpack_require__("../../../../../src/app/components/summary-topups/summary-topups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_summary_orders_summary_orders_component__ = __webpack_require__("../../../../../src/app/components/summary-orders/summary-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_summary_customers_summary_customers_component__ = __webpack_require__("../../../../../src/app/components/summary-customers/summary-customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_discount_settings_discount_settings_component__ = __webpack_require__("../../../../../src/app/components/discount-settings/discount-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__store__ = __webpack_require__("../../../../../src/app/store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */], pathMatch: 'full' },
    { path: 'topup', component: __WEBPACK_IMPORTED_MODULE_15__components_topup_topup_component__["a" /* TopupComponent */], pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGaurd */]] },
    { path: 'summarytopups', component: __WEBPACK_IMPORTED_MODULE_16__components_summary_topups_summary_topups_component__["a" /* SummaryTopupsComponent */], pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGaurd */]] },
    { path: 'summaryorders', component: __WEBPACK_IMPORTED_MODULE_17__components_summary_orders_summary_orders_component__["a" /* SummaryOrdersComponent */], pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGaurd */]] },
    { path: 'summarycustomers', component: __WEBPACK_IMPORTED_MODULE_18__components_summary_customers_summary_customers_component__["a" /* SummaryCustomersComponent */], pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGaurd */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_19__components_discount_settings_discount_settings_component__["a" /* DiscountSettingsComponent */], pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGaurd */]] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_20__components_product_product_component__["a" /* ProductComponent */], pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGaurd */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_21__components_home_home_component__["a" /* HomeComponent */], pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGaurd */]] },
    { path: 'cart/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_cart_cart_component__["a" /* CartComponent */], pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGaurd */]] }
];
var AppModule = (function () {
    function AppModule(ngRedux, devTools) {
        var enhancers = Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["isDevMode"])() ? [devTools.enhancer()] : [];
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_23__store__["b" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_23__store__["a" /* INITIAL_STATE */], [], enhancers);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_topup_topup_component__["a" /* TopupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_summary_topups_summary_topups_component__["a" /* SummaryTopupsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_summary_orders_summary_orders_component__["a" /* SummaryOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_summary_customers_summary_customers_component__["a" /* SummaryCustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_discount_settings_discount_settings_component__["a" /* DiscountSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_cart_cart_component__["a" /* CartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_redux__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGaurd */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ng2_redux__["NgRedux"], __WEBPACK_IMPORTED_MODULE_7_ng2_redux__["DevToolsExtension"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/classes/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Cart</h3>\n<div class=\"row\">\n  <div class=\"col-xs-8\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              <h5>\n                <span class=\"glyphicon glyphicon-shopping-cart\"></span> Shopping Cart</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-xs-2\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/350x150\">\n          </div>\n          <div class=\"col-xs-4\">\n            <h4 class=\"product-name\">\n              <strong>{{product.desc}}</strong>\n            </h4>\n            <h4>\n              <small>Quantity: {{product.qty}}</small>\n            </h4>\n          </div>\n          <div class=\"col-xs-6\">\n            <div class=\"col-xs-6 text-right\">\n              <h6>\n                <strong>R{{product.price}}\n                </strong>\n              </h6>\n            </div>\n          </div>\n        </div>\n        <hr>\n      </div>\n      <div class=\"panel-footer\">\n        <div class=\"row text-center\">\n          <div class=\"col-xs-9\">\n            <h4 class=\"text-right\">Total\n              <strong>R{{product.price}}</strong>\n            </h4>\n          </div>\n          <div class=\"col-xs-3\">\n            <button type=\"button\" (click)=\"addOrder(product)\" class=\"btn btn-success btn-block\">\n              Pay\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartComponent = (function () {
    function CartComponent(ngRedux, authService, router, route, flashMessagesService) {
        this.ngRedux = ngRedux;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__classes_user__["a" /* User */]();
        this.remainingBalance = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.authService.getProductById(id).subscribe(function (data) {
            if (data.success) {
                _this.product = data.product;
            }
        });
    };
    CartComponent.prototype.addOrder = function (prod) {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        var userData = {
            userId: this.user.id
        };
        this.authService.getAccountByUserId(userData).subscribe(function (data) {
            if (data.success) {
                _this.remainingBalance = data.account.balance;
            }
        });
        if (prod.price > this.remainingBalance) {
            this.flashMessagesService.show('Insufficient funds', { cssClass: 'error', timeout: 3000 });
        }
        else {
            var data = {
                userId: this.user.id,
                prodId: prod._id,
                qtyBought: 1
            };
            this.authService.addOrder(data).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessagesService.show('Purchase was successful!', { cssClass: 'success', timeout: 3000 });
                    _this.router.navigate(['home']);
                }
            });
        }
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/discount-settings/discount-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/discount-settings/discount-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Settings</h3>"

/***/ }),

/***/ "../../../../../src/app/components/discount-settings/discount-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiscountSettingsComponent = (function () {
    function DiscountSettingsComponent() {
    }
    DiscountSettingsComponent.prototype.ngOnInit = function () {
    };
    DiscountSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-discount-settings',
            template: __webpack_require__("../../../../../src/app/components/discount-settings/discount-settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/discount-settings/discount-settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DiscountSettingsComponent);
    return DiscountSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Shopping</h3>\n<div class=\"row\">\n  <div *ngFor=\"let product of products | async\" class=\"col-md-4\">\n    <div class=\"thumbnail\">\n      <h4 class=\"text-center\">\n        <span class=\"label label-info\">{{product.desc}}</span>\n      </h4>\n      <img src=\"http://placehold.it/350x250&text=Apples\" class=\"img-responsive\">\n      <div class=\"caption\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-xs-6\">\n            <h3>Quantity: {{product.qty}}</h3>\n          </div>\n          <div class=\"col-md-6 col-xs-6 price\">\n            <h3>\n              <label>R{{product.price}}</label>\n            </h3>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-6\">\n            <a (click)=\"onBuy(product)\" class=\"btn btn-success btn-product\">\n              <span class=\"glyphicon glyphicon-shopping-cart\"></span> Buy</a>\n          </div>\n        </div>\n        <p> </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_actions__ = __webpack_require__("../../../../../src/app/components/product/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(ngRedux, authService, router) {
        this.ngRedux = ngRedux;
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllProducts().subscribe(function (data) {
            if (data.success) {
                _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__product_actions__["b" /* GET_ALL_PRODUCTS */], payload: data.products });
            }
        });
    };
    HomeComponent.prototype.onBuy = function (prod) {
        this.router.navigate(['cart', prod._id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(function (s) { return s.product.products; }),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "products", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" (submit)=\"onLogin()\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <h2>Sign In</h2>\n      <hr>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"username\">E-Mail Address</label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n            <i class=\"fa fa-at\"></i>\n          </div>\n          <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" class=\"form-control\" id=\"username\" placeholder=\"you@example.com\"\n            required autofocus>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-control-feedback\">\n        <span class=\"text-danger align-middle\">\n          <!-- Put e-mail validation error messages here -->\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"password\">Password</label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group has-danger\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n            <i class=\"fa fa-key\"></i>\n          </div>\n          <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"password\" placeholder=\"Password\"\n            required>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <button type=\"submit\" class=\"btn btn-success\">\n        <i class=\"fa fa-user-plus\"></i> Login</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_summary_customers_actions__ = __webpack_require__("../../../../../src/app/components/summary-customers/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    function LoginComponent(validateService, flashMessagesService, authService, router, ngRedux) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.ngRedux = ngRedux;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__classes_user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin$ = this.ngRedux.select(function (state) { return state.user.admin; }).subscribe(function (admin) { _this.user.admin = admin; });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.admin$.unsubscribe();
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var userData = {
            username: this.user.username,
            password: this.user.password
        };
        //Required Fields
        if (!this.validateService.validateLogin(userData)) {
            this.flashMessagesService.show('Fill in all fields', { cssClass: 'error', timeout: 3000 });
            return false;
        }
        //Validate email
        if (!this.validateService.validateUsername(userData.username)) {
            this.flashMessagesService.show('Please provide us with a valid email', { cssClass: 'error', timeout: 3000 });
            return false;
        }
        var toAuthData = {
            email: userData.username,
            password: userData.password
        };
        this.authService.authenticateUser(toAuthData).subscribe(function (data) {
            if (data.success) {
                if (data.user.name == "admin") {
                    _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_7__components_summary_customers_actions__["c" /* TOGGLE_ADMIN */], payload: true });
                }
                _this.authService.storeUserData(data.token, data.user);
                _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_7__components_summary_customers_actions__["b" /* GET_USER_BY_ID */], payload: data.user });
                _this.flashMessagesService.show('Logged in successfully!', { cssClass: 'success', timeout: 3000 });
                _this.router.navigate(['home']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'error', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_redux__["NgRedux"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\">HybridHoldings</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/home\" class=\"nav-link\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li *ngIf=\"!id\" routerLinkActive=\"active\">\n        <a routerLink=\"/register\" class=\"nav-link\">Register</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/topup\" class=\"nav-link\">TopUp</a>\n      </li>\n      <li class=\"nav-item dropdown\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Account</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\n          <a routerLink=\"/summarytopups\" class=\"dropdown-item\">Summary TopUps</a>\n          <a routerLink=\"/summaryorders\" class=\"dropdown-item\">Summary Orders</a>\n        </div>\n      </li>\n      <li *ngIf=\"admin\" class=\"nav-item dropdown\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Management</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\n          <a routerLink=\"/product\" class=\"dropdown-item\">Add Product</a>\n          <a routerLink=\"/settings\" class=\"dropdown-item\">Discount Settings</a>\n          <a routerLink=\"/summarycustomers\" class=\"dropdown-item\">Summary Customers</a>\n          <a routerLink=\"/summarytopups\" class=\"dropdown-item\">Summary TopUps</a>\n          <a routerLink=\"/summaryorders\" class=\"dropdown-item\">Summary Orders</a>\n        </div>\n      </li>\n    </ul>\n    <button (click)=\"onLogout()\" class=\"btn btn-outline-success my-2 my-sm-0\">Logout</button>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__summary_customers_actions__ = __webpack_require__("../../../../../src/app/components/summary-customers/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(flashMessagesService, authService, router, ngRedux) {
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.ngRedux = ngRedux;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin$ = this.ngRedux.select(function (state) { return state.user.admin; }).subscribe(function (admin) { _this.admin = admin; });
        this.id$ = this.ngRedux.select(function (state) { return state.user.user.id; }).subscribe(function (id) { _this.id = id; });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.admin$.unsubscribe();
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__summary_customers_actions__["c" /* TOGGLE_ADMIN */], payload: false });
        this.flashMessagesService.show('You are Logged out', { cssClass: 'success', timeout: 3000 });
        this.router.navigate(['login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_redux__["NgRedux"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/product/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_PRODUCT_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_PRODUCTS; });
var GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
var GET_ALL_PRODUCTS = 'GET_PRODUCT_BY_ID';
var ADD_PRODUCTS = 'ADD_PRODUCTS';


/***/ }),

/***/ "../../../../../src/app/components/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Product</h3>\n<form class=\"form-horizontal\" (submit)=\"addProduct()\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <h2>Add Product</h2>\n      <hr>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"desc\">Desc</label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n            <i class=\"fa fa-user\"></i>\n          </div>\n          <input type=\"text\" name=\"desc\" [(ngModel)]=\"product.desc\" class=\"form-control\" id=\"desc\" placeholder=\"desc\" required autofocus>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-control-feedback\">\n        <span class=\"text-danger align-middle\">\n          <!-- Put name validation error messages here -->\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"price\">Price</label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n            <i class=\"fa fa-at\"></i>\n          </div>\n          <input type=\"number\" name=\"price\" [(ngModel)]=\"product.price\" class=\"form-control\" id=\"price\" placeholder=\"300\" required\n            autofocus>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-control-feedback\">\n        <span class=\"text-danger align-middle\">\n          <!-- Put e-mail validation error messages here -->\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"quantity\">Quantity</label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group has-danger\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n            <i class=\"fa fa-key\"></i>\n          </div>\n          <input type=\"number\" name=\"qty\" [(ngModel)]=\"product.qty\" class=\"form-control\" id=\"qty\" placeholder=\"1\" required>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"img\">Image</label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group has-danger\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n            <i class=\"fa fa-key\"></i>\n          </div>\n          <input type=\"text\" name=\"img\" [(ngModel)]=\"product.img\" class=\"form-control\" id=\"img\" placeholder=\"http://example.jpg\" required>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <button type=\"submit\" class=\"btn btn-success\">\n        <i class=\"fa fa-user-plus\"></i> Add Product</button>\n    </div>\n  </div>\n</form>\n<br>\n<br>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Desc</th>\n      <th>Price</th>\n      <th>Qty</th>\n      <th>Image</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let prod of products | async; let i = index\">\n      <th scope=\"row\">{{i}}</th>\n      <td>{{prod.desc}}</td>\n      <td>{{prod.price}}</td>\n      <td>{{prod.qty}}</td>\n      <td>{{prod.img}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_product__ = __webpack_require__("../../../../../src/app/classes/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_actions__ = __webpack_require__("../../../../../src/app/components/product/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductComponent = (function () {
    function ProductComponent(ngRedux, authService, flashMessagesService) {
        this.ngRedux = ngRedux;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.product = new __WEBPACK_IMPORTED_MODULE_3__classes_product__["a" /* Product */]();
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.addProduct = function () {
        var _this = this;
        if (this.product.desc == undefined || this.product.price == undefined || this.product.qty == undefined) {
            this.flashMessagesService.show('Fill in all fields', { cssClass: 'error', timeout: 3000 });
            return false;
        }
        this.authService.addproduct(this.product).subscribe(function (data) {
            if (data.success) {
                _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__product_actions__["a" /* ADD_PRODUCTS */], payload: data.product });
                _this.flashMessagesService.show('Added Product Successfully', { cssClass: 'success', timeout: 3000 });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(function (s) { return s.product.products; }),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "products", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/components/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/product/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRODUCT_INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["b"] = productReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign__ = __webpack_require__("../../../../tassign/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tassign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/components/product/actions.ts");


var PRODUCT_INITIAL_STATE = {
    product: {},
    products: [{}]
};
function productReducer(state, action) {
    if (state === void 0) { state = PRODUCT_INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* GET_PRODUCT_BY_ID */]:
            return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, { products: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* GET_ALL_PRODUCTS */]:
            return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, { products: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* ADD_PRODUCTS */]:
            return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, { products: state.products.concat([action.payload]) });
    }
    return state;
}


/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" (submit)=\"onRegister()\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <h2>Register New User</h2>\n      <hr>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"name\">Name</label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n            <i class=\"fa fa-user\"></i>\n          </div>\n          <input type=\"text\" name=\"name\" [(ngModel)]=\"user.name\" class=\"form-control\" id=\"name\" placeholder=\"Name\" required autofocus>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-control-feedback\">\n        <span class=\"text-danger align-middle\">\n          <!-- Put name validation error messages here -->\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"email\">E-Mail Address</label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n            <i class=\"fa fa-at\"></i>\n          </div>\n          <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\" required\n            autofocus>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-control-feedback\">\n        <span class=\"text-danger align-middle\">\n          <!-- Put e-mail validation error messages here -->\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"password\">Password</label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group has-danger\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n            <i class=\"fa fa-key\"></i>\n          </div>\n          <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"password\" placeholder=\"Password\"\n            required>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <button type=\"submit\" class=\"btn btn-success\">\n        <i class=\"fa fa-user-plus\"></i> Register</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__classes_user__["a" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        var userData = {
            name: this.user.name,
            email: this.user.email,
            password: this.user.password
        };
        console.log(userData);
        //Required Fields
        if (!this.validateService.validateRegistration(userData)) {
            this.flashMessagesService.show('Fill in all fields', { cssClass: 'error', timeout: 3000 });
            return false;
        }
        //Validate email
        if (!this.validateService.validateUsername(userData.email)) {
            this.flashMessagesService.show('Please provide us with a valid email', { cssClass: 'error', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(userData).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessagesService.show(data.msg, { cssClass: 'success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'error', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/summary-customers/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_USER_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOGGLE_ADMIN; });
var GET_USER_BY_ID = 'GET_USER_BY_ID';
var GET_ALL_USERS = 'GET_USER_BY_ID';
var TOGGLE_ADMIN = 'TOGGLE_ADMIN';


/***/ }),

/***/ "../../../../../src/app/components/summary-customers/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["b"] = userReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign__ = __webpack_require__("../../../../tassign/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tassign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/components/summary-customers/actions.ts");


var USER_INITIAL_STATE = {
    user: {},
    users: [{}],
    admin: false
};
function userReducer(state, action) {
    if (state === void 0) { state = USER_INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* GET_USER_BY_ID */]:
            return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, { user: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* GET_ALL_USERS */]:
            return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, { users: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* TOGGLE_ADMIN */]:
            return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, { admin: action.payload });
    }
    return state;
}


/***/ }),

/***/ "../../../../../src/app/components/summary-customers/summary-customers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/summary-customers/summary-customers.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Customers</h3>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Email</th>\n      <th>Password</th>\n      <th>Date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n      <td>Otto</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/summary-customers/summary-customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryCustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryCustomersComponent = (function () {
    function SummaryCustomersComponent() {
    }
    SummaryCustomersComponent.prototype.ngOnInit = function () {
    };
    SummaryCustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-summary-customers',
            template: __webpack_require__("../../../../../src/app/components/summary-customers/summary-customers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/summary-customers/summary-customers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryCustomersComponent);
    return SummaryCustomersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/summary-orders/summary-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/summary-orders/summary-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Orders</h3>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Product</th>\n      <th>Quantity</th>\n      <th>Price</th>\n      <th>Date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/summary-orders/summary-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryOrdersComponent = (function () {
    function SummaryOrdersComponent() {
    }
    SummaryOrdersComponent.prototype.ngOnInit = function () {
    };
    SummaryOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-summary-orders',
            template: __webpack_require__("../../../../../src/app/components/summary-orders/summary-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/summary-orders/summary-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryOrdersComponent);
    return SummaryOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/summary-topups/summary-topups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/summary-topups/summary-topups.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Top Ups</h3>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Amount</th>\n      <th>Date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/summary-topups/summary-topups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryTopupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryTopupsComponent = (function () {
    function SummaryTopupsComponent() {
    }
    SummaryTopupsComponent.prototype.ngOnInit = function () {
    };
    SummaryTopupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-summary-topups',
            template: __webpack_require__("../../../../../src/app/components/summary-topups/summary-topups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/summary-topups/summary-topups.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryTopupsComponent);
    return SummaryTopupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/topup/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_BALANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MINUS_BALANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_TOPUP_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_TOPUPS; });
var ADD_BALANCE = 'ADD_BALANCE';
var MINUS_BALANCE = 'MINUS_BALANCE';
var GET_TOPUP_BY_ID = 'GET_TOPUP_BY_ID';
var GET_ALL_TOPUPS = 'GET_TOPUP_BY_ID';


/***/ }),

/***/ "../../../../../src/app/components/topup/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOPUP_INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["b"] = topUpReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign__ = __webpack_require__("../../../../tassign/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tassign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/components/topup/actions.ts");


var TOPUP_INITIAL_STATE = {
    amount: 0,
    userId: null,
    createdAt: null,
    topUp: {},
    topUps: [{}],
    account: {}
};
function topUpReducer(state, action) {
    if (state === void 0) { state = TOPUP_INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* ADD_BALANCE */]:
            return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, { account: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* MINUS_BALANCE */]:
            return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, { amount: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* GET_TOPUP_BY_ID */]:
            return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, { account: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* GET_ALL_TOPUPS */]:
            return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, { topUps: action.payload });
    }
    return state;
}


/***/ }),

/***/ "../../../../../src/app/components/topup/topup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/topup/topup.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Top Up</h3>\n<div class=\"card text-center col-md-6\">\n  <div class=\"card-header\">\n    Remaining Balance\n  </div>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">R{{balance}}</h4>\n    <form (submit)=\"onTopUp()\">\n      <div class=\"form-group\">\n        <label for=\"Amount\">Amount</label>\n        <input type=\"number\" name=\"amount\" id=\"amount\" [(ngModel)]=\"amount\" min=\"0\" class=\"form-control\" placeholder=\"400\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">TopUp</button>\n      <br/>\n      <br/>\n    </form>\n  </div>\n  <div class=\"card-footer text-muted\">\n    FNB\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/topup/topup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_topup_actions__ = __webpack_require__("../../../../../src/app/components/topup/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopupComponent = (function () {
    function TopupComponent(ngRedux, authService, flashMessagesService) {
        this.ngRedux = ngRedux;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__classes_user__["a" /* User */]();
        this.amount = 0;
    }
    TopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user.id != null) {
            var data = {
                userId: this.user.id
            };
            this.authService.getBalanceById(data).subscribe(function (data) {
                if (data.success) {
                    console.log("init data", data);
                    _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__components_topup_actions__["c" /* GET_TOPUP_BY_ID */], payload: data.account });
                }
            });
        }
        this.balance$ = this.ngRedux.select(function (state) { return state.topup.account.balance; }).subscribe(function (balance) { _this.balance = balance; });
    };
    TopupComponent.prototype.ngOnDestroy = function () {
        this.balance$.unsubscribe();
    };
    TopupComponent.prototype.onTopUp = function () {
        var _this = this;
        var data = {
            userId: this.user.id,
            amount: this.amount
        };
        this.authService.topUp(data).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.flashMessagesService.show('Loaded Account Successfully!', { cssClass: 'success', timeout: 3000 });
                _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__components_topup_actions__["a" /* ADD_BALANCE */], payload: data.msg });
                _this.amount = 0;
            }
        });
    };
    TopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topup',
            template: __webpack_require__("../../../../../src/app/components/topup/topup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/topup/topup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], TopupComponent);
    return TopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurd = (function () {
    function AuthGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGaurd.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers });
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers });
    };
    AuthService.prototype.topUp = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/topups/topup', data, { headers: headers });
    };
    AuthService.prototype.getBalanceById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/accounts/Account', id, { headers: headers });
    };
    AuthService.prototype.getAllProducts = function () {
        return this.http.get('http://localhost:3000/products/getAllProducts');
    };
    AuthService.prototype.addproduct = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/products/addproduct', data, { headers: headers });
    };
    AuthService.prototype.getProductById = function (id) {
        return this.http.get("http://localhost:3000/products/product/" + id);
    };
    AuthService.prototype.addOrder = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/orders/addOrder', data, { headers: headers });
    };
    AuthService.prototype.getAccountByUserId = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/accounts/Account', data, { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateLogin = function (userData) {
        if (userData.username == undefined || userData.password == undefined)
            return false;
        else
            return true;
    };
    ValidateService.prototype.validateRegistration = function (userData) {
        if (userData.name == undefined || userData.email == undefined || userData.password == undefined)
            return false;
        else
            return true;
    };
    ValidateService.prototype.validateUsername = function (username) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(username);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_topup_store__ = __webpack_require__("../../../../../src/app/components/topup/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_product_store__ = __webpack_require__("../../../../../src/app/components/product/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_summary_customers_store__ = __webpack_require__("../../../../../src/app/components/summary-customers/store.ts");




var INITIAL_STATE = {
    topup: __WEBPACK_IMPORTED_MODULE_1__components_topup_store__["a" /* TOPUP_INITIAL_STATE */],
    product: __WEBPACK_IMPORTED_MODULE_2__components_product_store__["a" /* PRODUCT_INITIAL_STATE */],
    user: __WEBPACK_IMPORTED_MODULE_3__components_summary_customers_store__["a" /* USER_INITIAL_STATE */]
};
var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    topup: __WEBPACK_IMPORTED_MODULE_1__components_topup_store__["b" /* topUpReducer */],
    product: __WEBPACK_IMPORTED_MODULE_2__components_product_store__["b" /* productReducer */],
    user: __WEBPACK_IMPORTED_MODULE_3__components_summary_customers_store__["b" /* userReducer */]
});


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map