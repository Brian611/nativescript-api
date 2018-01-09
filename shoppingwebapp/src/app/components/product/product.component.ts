import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../../store';
import { IProduct, IProductState } from './store';
import { Product } from '../../classes/product';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ADD_PRODUCTS, GET_ALL_PRODUCTS } from '../product/actions';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @select((s: IAppState) => s.product.products) products;
  product = new Product();

  constructor(private ngRedux: NgRedux<IAppState>,
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {

  }

  addProduct() {
    if (this.product.desc == undefined || this.product.price == undefined || this.product.qty == undefined) {
      this.flashMessagesService.show('Fill in all fields', { cssClass: 'error', timeout: 3000 });
      return false;
    }
    this.authService.addproduct(this.product).subscribe(data => {
      if (data.success) {
        this.ngRedux.dispatch({ type: ADD_PRODUCTS, payload: data.product })
        this.flashMessagesService.show('Added Product Successfully', { cssClass: 'success', timeout: 3000 });
      }
    })
  }
}
