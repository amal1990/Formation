import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Formation } from 'app/shared/models/formation';
import { environment } from '../../../environments/environment';

@Injectable()
export class FormationService {

  constructor(private http: Http) { }

  fetch(): Observable<Formation[]> {
    return this.http.get(`${environment.apiURL}/formations`).map((res: Response) => res.json());
  }

  save(model: Formation): Observable<Formation[]> {
    return this.http.post(`${environment.apiURL}/formations`, model).map((res: Response) => res.json());
  }

  find(id): Observable<Formation> {
    return this.http.get(`${environment.apiURL}/formations/${id}`).map((res: Response) => res.json()).retry(3);
  }

  put(model: Formation): Observable<Formation> {
    return this.http.put(`${environment.apiURL}/formations/${model.id}`, model).map((res: Response) => res.json());
  }

  delete(id): Observable<Formation> {
    return this.http.delete(`${environment.apiURL}/formations/${id}`).map((res: Response) => res.json());
  }
}
