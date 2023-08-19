import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  private nonLoginOnlyRoutes = ['login'];

  constructor(private authServe: AuthService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    const isLoggedIn = await this.authServe.isLoggedIn();
    console.log(isLoggedIn, '------------------');
    
    const isGoingToNonLoginPage = this.nonLoginOnlyRoutes.some(
      (r) => route.routeConfig?.path === r
    );

    if (!isLoggedIn && isGoingToNonLoginPage) {
      return true;
    }

    if (isLoggedIn && !isGoingToNonLoginPage) {
      return true;
    }

    if (isLoggedIn && isGoingToNonLoginPage) {
      this.router.navigate(['/home']);
      return false;
    }

    this.router.navigate(['/login']);
    return false;
  }

  async canLoad(route: Route, segments: UrlSegment[]): Promise<any> {
    const isLoggedIn = await this.authServe.isLoggedIn();
    console.log(isLoggedIn, '-------------------------');

    const isGoingToNonLoginPage = this.nonLoginOnlyRoutes.some(
      (r) => route.path === r
    );

    if (!isLoggedIn && isGoingToNonLoginPage) {
      return true;
    }

    if (isLoggedIn && !isGoingToNonLoginPage) {
      return true;
    }

    if (isLoggedIn && isGoingToNonLoginPage) {
      this.router.navigate(['/items']);
      return false;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
