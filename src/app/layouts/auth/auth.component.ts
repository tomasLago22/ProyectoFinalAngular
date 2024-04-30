import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnDestroy, OnInit {

authUserChangeSubscription?: Subscription

constructor(private authService : AuthService, private router : Router){}

ngOnInit(): void {
  this.subscribeToAuthUserChange()
}

ngOnDestroy(): void {
  this.authUserChangeSubscription?.unsubscribe()
}

subscribeToAuthUserChange(): void{
  this.authUserChangeSubscription= this.authService.authUser$.subscribe({
    next: (authUser) => {
      if(authUser != null){
        this.router.navigate(['dashboard', 'usuarios'])
      }
    }
  })
}

login (){
  this.authService.login();
}
}
