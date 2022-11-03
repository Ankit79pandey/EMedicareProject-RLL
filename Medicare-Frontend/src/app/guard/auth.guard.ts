import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router) { }

canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    var isAuthenticated = (sessionStorage.getItem("username")!=null)?true:false;
    if (!isAuthenticated) {
        this.router.navigate(['/']);
        return false;
    }else{
      
      return true;
    }
    

}


  
}
