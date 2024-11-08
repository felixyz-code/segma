import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private jsonUrl = 'assets/data/servicios.json';

  constructor(private http: HttpClient) { }

  getServicios(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
