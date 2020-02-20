import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { User } from "../model/user";
import { SingleResponse } from "../model/single-response";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    let body = new URLSearchParams();
    body.set("username", username);
    body.set("password", password);
    body.set("scope", "trust");
    body.set("grant_type", "password");
    return this.http
      .post<any>(`${environment.apiUrl}/oauth/token`, body.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${environment.clientId}`
        }
      })
      .pipe(
        map(response => {
          // login successful if there's a access token in the response
          if (response) {
            // store access token in local storage to keep user logged in between page refreshes
            localStorage.setItem("token", JSON.stringify(response));
          }

          return response;
        })
      );
  }

  getUser(token: string) {
    return this.http
      .get<any>(`${environment.apiUrl}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .pipe(
        map(response => {
          if (response) {
            // store user details in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(response.data));
            this.currentUserSubject.next(response.data);
          }
          return response;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    this.currentUserSubject.next(null);
  }
}
