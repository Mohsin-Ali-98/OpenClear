import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models';
import { environment } from 'src/environments/environment.prod';
// import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<String>;
    public user : Observable<any> ;

    constructor(
        private router: Router,
        private http: HttpClient
        
    ) {
        this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('data.token')!));
        this.user = this.userSubject.asObservable();
        
    }
    public get userValue(): any {
        return this.userSubject.value;
    }




    login(email_address: string, password: string ) {
        console.log(email_address , password)
      
        
        return this.http.post<any>(`${environment.apiUrl}/signin`, { email_address, password },
        // {headers: new HttpHeaders({'x-access-token':'tokenvalue'})}
        )

        
        .pipe(map(
            res => {
                // debugger
                if(!res.status){
                    console.log(res.message)
                   return res.message
                }
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.userSubject.next(res.data.token);
                console.log(this.userValue)
                if(res.data.token!=null || res.data.token!=undefined){
                    localStorage.setItem('token', res.data.token);
                    this.router.navigate(['/createorder']);
                }
                return res;
            }));
            
            

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        this.userSubject.next(null!);
        this.router.navigate(['/login']);
    }
}