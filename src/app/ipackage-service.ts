import { Observable } from "rxjs";
import { TouristPackage } from "./tourist-package";

export interface ITouristPackageService {
    savetouristPackage(touristPackage: TouristPackage): Observable<string>;

    getAlltouristPackages(): Observable<TouristPackage[]>;

    updateTouristPackage(rouristPackage: TouristPackage): Observable<string>;
}
