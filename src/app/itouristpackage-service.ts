import { Observable } from "rxjs";
import { TouristPackage } from "./tourist-package";

export interface ITouristPackageService {
    savetouristPackage(touristPackage: TouristPackage): Observable<string>;

    getAlltouristPackages(): Observable<TouristPackage[]>;

    updateTouristPackage(touristPackage: TouristPackage): Observable<string>;

    deleteTouristPackage(touristPackageId: number): Observable<string>;
}
