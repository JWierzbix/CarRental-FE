import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { LogInDTO } from '../models/log-in.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  BASE_URL: string = 'http://carrentalservice-001-site1.atempurl.com/api/authentication'; 

  constructor(
    private http: HttpClient
  ) { }

  logIn(logIn: LogInDTO) {
    const uri: string = this.BASE_URL;
    console.log(logIn);
    return this.http.get(uri, {
      params: {
        userName: logIn.userName,
        password: logIn.password
      },
      responseType: 'text'
    }).pipe(map(res => jwt_decode(res)))
  }

  register(data: any) {
    return this.http.post('http://carrentalservice-001-site1.atempurl.com/api/account', data);
  }
}
