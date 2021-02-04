import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { users } from './users';
import { User } from './user';
import { catchError } from 'rxjs/operators';
// import { log } from 'util';

const httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class TutorialService {

    private baseUrl: string;

    constructor(private http: HttpClient) {

        this.baseUrl = 'http://localhost:8080';
    }

    public getAll(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}`);
    }

    public getMax(): Observable<string> {
        return this.http.get<string>(`${this.baseUrl}/id`);
    }

    //   get(id): Observable<any> {
    //     return this.http.get(`${this.baseUrl}/get/${id}`);
    //   }

    //   create(data): Observable<any> {
    //     return this.http.post(this.baseUrl, data);
    //   }
    addUser(id: any, name: any, age: any, gender: any, status: any, hobby: any,profession: any): Observable<any> {
        // return this.http.put(this.baseUrl + '/update', user, httpOptions)
        //   .pipe(catchError(this.handleError('updateUser id=' + user.id)));
        return this.http.put(`${this.baseUrl}/insert?id=${id}&name=${name}&age=${age}&gender=${gender}&status=${status}&hobby=${hobby}&profession=${profession}`, users);
      }
    
    //   public updateAccount(id,name): Observable<any> {
    //     // return this.http.put(`${this.updUrl}/${id}`, data);
    //     return this.http.put(`${this.baseUrl}/update?ALIAS=${name}&RID=${id}`, name);
    //   }
    
    updateUser(id: any, name: any, age: any, gender: any, status: any, hobby: any,profession: any): Observable<any> {
        // return this.http.put(this.baseUrl + '/update', user, httpOptions)
        //   .pipe(catchError(this.handleError('updateUser id=' + user.id)));
        return this.http.put(`${this.baseUrl}/update?name=${name}&age=${age}&gender=${gender}&status=${status}&hobby=${hobby}&profession=${profession}&id=${id}`, users);
      }

    deleteUser(user: User | number): Observable<User> {
        const id = typeof user === 'number' ? user : user.id;
        const url = `${this.baseUrl}/delete/${id}`;
        const delhttpOptions = {
            headers: new HttpHeaders({ 'content-Type': 'application/json' }),
            body: user
        };
        return this.http.delete<User>(url, delhttpOptions)
            .pipe(catchError(this.handleError<User>('deleteUser')));
    }
    
    //   deleteAll(): Observable<any> {
    //     return this.http.delete(`this.baseUrl/delete/`);
    //   }
    /**
      * Handle Http operation that failed.
      * Let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
      */

    private handleError<User>(operation = 'operation', result?: User) {
        return (error: any): Observable<User> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as User);
        };
    }
}