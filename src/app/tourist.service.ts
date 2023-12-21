import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tourist } from './tourist';
import { Observable } from 'rxjs';
import { ITouristService } from './itourist-service';

@Injectable({
  providedIn: 'root'
})
export class TouristService implements ITouristService {
  private restUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  editTouristPackage(tourist: Tourist): Observable<string> {
    throw new Error('Method not implemented.');
  }
  getTouristPackageById(tid: number): Observable<string | Tourist> {
    throw new Error('Method not implemented.');
  }

  saveTourist(tourist: Tourist): Observable<string> {
    return this
      .httpClient
      .post(`${this.restUrl}/save`, tourist, { responseType: 'text' });
  }

  getAllTourists(): Observable<Tourist[]> {
    return this
      .httpClient
      .get<Tourist[]>(`${this.restUrl}/tourists`, { responseType: 'json' });
  }

  getATouristDetails(tid: number): Observable<string | Tourist> {
    return this
      .httpClient
      .get<Tourist | string>(`${this.restUrl}/tourist/${tid}`, { responseType: 'json' });
  }


  getTouristById(tid: number): Observable<Tourist> {
    return this
      .httpClient
      .get<Tourist>(`${this.restUrl}/tourist/${tid}`, { responseType: 'json' });
  }

  editTourist(tourist: Tourist): Observable<string> {
    return this
      .httpClient
      .put(`${this.restUrl}/edit`, tourist, { responseType: 'text' });
  }

  deleteTourist(touristId: number): Observable<string> {
    return this.httpClient
      .delete(`${this.restUrl}/delete/${touristId}`, { responseType: 'text' })
  }
}