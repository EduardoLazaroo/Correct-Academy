import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private route: Router, 
    private afa: AngularFireAuth,
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise<boolean>((resolve)=>{
      this.afa.onAuthStateChanged((user: User)=>{
        if(!user){
          this.route.navigate(['login'])
        }else{
          resolve(true);
        }
      })
    });
  }
  
}
