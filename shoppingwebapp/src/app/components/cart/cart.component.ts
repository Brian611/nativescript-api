import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgRedux, select } from 'ng2-redux';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../../store';
import { AuthService } from '../../services/auth.service';
import { GET_PRODUCT_BY_ID, ADD_PRODUCTS } from '../product/actions';
import { IProducts } from '../product/store';
import { User } from '../../classes/user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  remainingBalance: number;
  product: IProducts;
  user = new User();
  constructor(private ngRedux: NgRedux<IAppState>,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService) { this.remainingBalance = 0 }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.authService.getProductById(id).subscribe(data => {
      if (data.success) {
        this.product = data.product;
      }
    })
  }

  addOrder(prod: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    let userData = {
      userId: this.user.id
    }
    this.authService.getAccountByUserId(userData).subscribe(data => {
      if (data.success) {
        this.remainingBalance = data.account.balance;
      }
    });

    if (prod.price > this.remainingBalance) {
      this.flashMessagesService.show('Insufficient funds', { cssClass: 'error', timeout: 3000 });
    } else {
      let data = {
        userId: this.user.id,
        prodId: prod._id,
        qtyBought: 1
      }

      this.authService.addOrder(data).subscribe(data => {
        if (data.success) {
          this.flashMessagesService.show('Purchase was successful!', { cssClass: 'success', timeout: 3000 });
          this.router.navigate(['home']);
        }
      });
    }
  }
}