import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, delay, Observable, Subject } from 'rxjs';
import { admin, roles } from '../interface';
@Injectable({
    providedIn: 'root'
})
export class mainService {
    url = "http://localhost:3000/";
    constructor(private http: HttpClient) { }

    getData(): Observable<admin[]> {
        return this.http.get<admin[]>(`${this.url}list`);
    }

    getRoles(): Observable<roles[]> {
        return this.http.get<roles[]>(`${this.url}role-list`);
    }

    getDataOne(id: number): Observable<admin[]> {
        return this.http.get<admin[]>(`${this.url}list/${id}`);
    }

    postData(data: admin) {
        return this.http.post<admin>(`${this.url}list`, data);
    }

    DeleteData(id: number) {
        return this.http.delete<admin>(`${this.url}list/${id}`);
    }

    EditData(id: number, data: admin) {
        return this.http.put<admin>(`${this.url}list/${id}`, data);
    }

    DeleteRole(id: number) {
        return this.http.delete<admin>(`${this.url}role-list/${id}`);
    }

    EditRoles(id: number, data: roles) {
        return this.http.put<roles>(`${this.url}role-list/${id}`, data);
    }

    postRoles(data: admin) {
        return this.http.post<admin>(`${this.url}role-list`, data);
    }

    paginate(page: number, limit: number): Observable<roles> {
        return this.http.get<roles>(`${this.url}role-list?_page=${page}&_limit=${limit}`);
    }

    // filterBySelect(): Observable<roles> {
    //     return this.http.get<roles>(`${this.url}role-list?selected=true`);
    // }

    search(name: string): Observable<roles> {
        return this.http.get<roles>(`${this.url}role-list?name_like=${name}`).pipe(delay(1000));
    }
}