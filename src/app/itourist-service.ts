import { Observable } from "rxjs";
import { Tourist } from "./tourist";

export interface ITouristService {
    saveTourist(tourist: Tourist): Observable<string>;

    getAllTourists(): Observable<Tourist[]>;

    getATouristDetails(tid: number): Observable<Tourist | string>;

    editTouristPackage(tourist: Tourist): Observable<string>;

    getTouristPackageById(tid: number): Observable<Tourist | string>

    deleteTourist(touristId: number): Observable<string>;
}