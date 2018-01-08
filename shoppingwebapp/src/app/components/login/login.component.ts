import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../classes/user';
import { NgRedux, select } from 'ng2-redux';
import {
  TOGGLE_ADMIN
} from '../../components/summary-customers/actions';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  private admin$: Subscription;

  constructor(private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.admin$ = this.ngRedux.select<boolean>(state => state.user.admin).subscribe(admin => { this.user.admin = admin; });
  }

  ngOnDestroy() {
    this.admin$.unsubscribe();

  }
  onLogin() {
    const userData = {
      username: this.user.username,
      password: this.user.password
    }
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

    const toAuthData = {
      email: userData.username,
      password: userData.password
    }

    this.authService.authenticateUser(toAuthData).subscribe(data => {

      if (data.success) {
        if (data.user.name == "admin") {
          this.ngRedux.dispatch({ type: TOGGLE_ADMIN, payload: true });
        }
        this.authService.storeUserData(data.token, data.user);
        this.flashMessagesService.show('Logged in successfully!', { cssClass: 'success', timeout: 3000 });
        this.router.navigate(['home']);
      } else {
        this.flashMessagesService.show(data.msg, { cssClass: 'error', timeout: 3000 });
        this.router.navigate(['login']);
      }
    });
  }
}
