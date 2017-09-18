
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('This is intercepted call');
        console.log(req);
        let request = req.clone({ headers: req.headers.set('token', 'thisisnewtoken') });
        console.log('This is modified call');
        console.log(request);
        return next.handle(request);
    }

}
