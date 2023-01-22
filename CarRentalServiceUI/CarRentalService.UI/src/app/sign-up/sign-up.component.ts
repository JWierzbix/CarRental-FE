import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @ViewChild('form') form: NgForm

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
    console.log(this.form.value);
    const data = this.form.value;
    this.authService.register(data).subscribe(res => {
      console.log(res)
      this.router.navigate(['/zaloguj'])
    })
  }
}
