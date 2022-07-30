import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    getDataOne(id:number): Observable<admin[]> {
      return this.http.get<admin[]>(`http://localhost:3000/list/${id}`);
    }
  
    postData(data: admin) {
      return this.http.post<admin>(`${this.url}list`, data);
    }
  
    DeleteData(id: number) {
      return this.http.delete<admin>(`http://localhost:3000/list/${id}`);
    }
  
    EditData(id: number , data:admin) {
      return this.http.put<admin>(`http://localhost:3000/list/${id}`, data);
    }

    paginate(page: number , limit:number) {
      return this.http.get<roles>(`http://localhost:3000/role-list?_page=${page}&_limit=${limit}`);
    }
  }