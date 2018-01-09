import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../classes/user';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
import { Subscription } from 'rxjs/Subscription';
import {
  TOGGLE_ADMIN
} from '../summary-customers/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  admin: boolean;
  id: number;

  private admin$: Subscription;
  private id$: Subscription;
  constructor(private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
    this.admin$ = this.ngRedux.select<boolean>(state => state.user.admin).subscribe(admin => { this.admin = admin; });
    this.id$ = this.ngRedux.select<any>(state => state.user.user.id).subscribe(id => { this.id = id });

  }
  ngOnDestroy() {
    this.admin$.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
    this.ngRedux.dispatch({ type: TOGGLE_ADMIN, payload: false })
    this.flashMessagesService.show('You are Logged out', { cssClass: 'success', timeout: 3000 });
    this.router.navigate(['login']);
    return false;
  }
}