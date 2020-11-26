import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CM_CONSTANTS} from './constants';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: `${localStorage.getItem(CM_CONSTANTS.LOCAL_STORAGE_PREFIX + '.' + CM_CONSTANTS.JWT_TOKEN)}`
            }
        });
        return next.handle(request);
    }
}


