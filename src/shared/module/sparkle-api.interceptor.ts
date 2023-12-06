import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class SparkleApiInterceptor implements HttpInterceptor {
  private token = environment.apiToken;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.token) {
      return next.handle(req);
    }

    const apiRequest = req.clone({
      setHeaders: {
        ApiToken: this.token,
      },
    });

    return next.handle(apiRequest);
  }
}
