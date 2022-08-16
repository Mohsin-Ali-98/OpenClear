import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormControl, FormGroup, Validators , FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.userValue) { 
          this.router.navigate(['createorder']);
      }else{
        this.router.navigate(['login']);
      }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email_address: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
    //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  get email_address(){return this.loginForm.get("email")}
  get password(){return this.loginForm.get("password") }

  onSubmit() {
      this.submitted = true; 

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.email_address.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  console.log("this is return urllog")
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }
}