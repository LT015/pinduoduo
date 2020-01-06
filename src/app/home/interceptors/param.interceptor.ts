import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modefieReq = req.clone({
            setParams: {icode: environment.icode}
        });
        return next.handle(modefieReq);
    }
}
