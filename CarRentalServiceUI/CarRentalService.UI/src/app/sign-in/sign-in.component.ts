import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @ViewChild('form') form: NgForm

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.logIn(this.form.value).subscribe((res: any) => {
      const credentials = []
      for(const el in res) {
        console.log(res[el])
        credentials.push(res[el])
      }
      localStorage.setItem('userId', credentials[0]);
      localStorage.setItem('exp', credentials[1]);

      this.router.navigate(['/'])
    })
  }
}
