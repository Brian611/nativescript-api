import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../classes/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();

  constructor(private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    const userData = {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password
    }
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

    this.authService.registerUser(userData).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessagesService.show(data.msg, { cssClass: 'success', timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.flashMessagesService.show(data.msg, { cssClass: 'error', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });
  }
}
