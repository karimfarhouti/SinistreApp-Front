import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClaimDto} from "../dtos/claim-dto";
import {Observable} from "rxjs";
import {Claim} from "../models/claim";
import {AppComponent} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) {
  }

  createClaim(claimDTO: ClaimDto): Observable<Claim> {
    return this.http.post<Claim>(AppComponent.API_URL + "claims", claimDTO);
  }

  updateClaim(claimDTO: ClaimDto): Observable<Claim> {
    return this.http.put(AppComponent.API_URL + "claims", claimDTO);
  }

  deleteClaim(claimId?: number): Observable<any> {
    return this.http.delete(AppComponent.API_URL + "claims/" + claimId);
  }

  getById(claimId: string): Observable<Claim> {
    return this.http.get<Claim>(AppComponent.API_URL + "claim/" + claimId);
  }

  getAll(): Observable<Claim[]> {
    return this.http.get<Claim[]>(AppComponent.API_URL + "claims");
  }
}
