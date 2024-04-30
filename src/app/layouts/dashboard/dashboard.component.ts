import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs';
import { Usuario } from './pages/usuarios/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  showFiller = false;


  authUser$: Observable<Usuario | null>;

  constructor(private authService:AuthService, private router: Router){
    this.authUser$ =authService.authUser$
  }
  ngOnInit(): void {
    ;
  }

  login(): void{
    this.authService.login()
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['auth'])
  }

  isMobile(): boolean{
    return window.innerWidth <= 280;
  }
}
