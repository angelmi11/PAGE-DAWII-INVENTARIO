import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log("flap 1")
    if (this.authService.getToken()) {
      const authToken = this.authService.getToken();

      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      return next.handle(authRequest);
    } else {
      // Si el usuario no está autenticado, simplemente pasa la solicitud sin agregar el encabezado de autorización
      return next.handle(request);
    }
  }
}
