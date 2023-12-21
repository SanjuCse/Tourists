import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITouristPackageService } from './itouristpackage-service';
import { TouristPackage } from './tourist-package';

@Injectable({
  providedIn: 'root'
})
export class TouristPackageService implements ITouristPackageService {
  private restUrl = "http://localhost:8080/touristPackage";

  constructor(private httpClient: HttpClient) { }

  savetouristPackage(touristPackage: TouristPackage): Observable<string> {
    return this.httpClient
      .post(`${this.restUrl}/save`, touristPackage, { responseType: 'text' });
  }

  getAlltouristPackages(): Observable<TouristPackage[]> {
    return this.httpClient
      .get<TouristPackage[]>(`${this.restUrl}/packages`, { responseType: 'json' });
  }

  updateTouristPackage(rouristPackage: TouristPackage): Observable<string> {
    return this.httpClient
      .put<string>(`${this.restUrl}/edit`, { responseType: 'text' });
  }

  deleteTouristPackage(touristPackageId: number): Observable<string> {
    return this.httpClient
      .delete(`${this.restUrl}/delete/${touristPackageId}`, { responseType: 'text' })
  }
}
