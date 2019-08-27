import { Injectable, Injector } from '@angular/core';
import {  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector : Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    // let tokenizedReq = req.clone({
    //   setHeaders : {
    //     Authorization : 'Bearer xx.yy.zz'
    //   }
    // })
    let authService  = this.injector.get(AuthService);
    let headers = req.headers
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${authService.getToken()}`);
    const cloneReq = req.clone({headers});
    return next.handle(cloneReq);
  }

}
