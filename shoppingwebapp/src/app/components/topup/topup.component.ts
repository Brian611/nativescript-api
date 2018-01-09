import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import {
  ADD_BALANCE,
  GET_TOPUP_BY_ID
} from '../../components/topup/actions';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../../store';
import { AuthService } from '../../services/auth.service';
import { User } from '../../classes/user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})

export class TopupComponent implements OnInit {

  balance: number;
  user = new User();
  amount: number
  
  private balance$: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>,
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService) { this.amount = 0 }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user.id != null) {
      let data = {
        userId: this.user.id
      }
      this.authService.getBalanceById(data).subscribe(data => {
        if (data.success) {
          this.ngRedux.dispatch({ type: GET_TOPUP_BY_ID, payload: data.account })
        }
      });
    }
    this.balance$ = this.ngRedux.select<number>(state => state.topup.account.balance).subscribe(balance => { this.balance = balance; });
  }

  ngOnDestroy() {
    this.balance$.unsubscribe();
  }
  onTopUp() {
    let data = {
      userId: this.user.id,
      amount: this.amount
    }
    this.authService.topUp(data).subscribe(data => {
      if (data.success) {
        console.log(data);
        this.flashMessagesService.show('Loaded Account Successfully!', { cssClass: 'success', timeout: 3000 });
        this.ngRedux.dispatch({ type: ADD_BALANCE, payload: data.msg });
        this.amount = 0;
      }
    });
  }
}
