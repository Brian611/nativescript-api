import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import {
  GET_ALL_TOPUPS
} from '../../components/topup/actions';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../../store';
import { AuthService } from '../../services/auth.service';
import { User } from '../../classes/user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-summary-topups',
  templateUrl: './summary-topups.component.html',
  styleUrls: ['./summary-topups.component.css']
})
export class SummaryTopupsComponent implements OnInit {

  user = new User();
  @select((s: IAppState) => s.topup.topUps) topUps;

  constructor(private ngRedux: NgRedux<IAppState>,
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.authService.getTopUpsById(this.user.id).subscribe(data => {
      if (data.success) {
        console.log(data.topups);
        this.ngRedux.dispatch({ type: GET_ALL_TOPUPS, payload: data.topups })
      }
    });
  }

}
