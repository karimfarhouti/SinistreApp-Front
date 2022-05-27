import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClaimDto} from "../dtos/claim-dto";
import {Observable} from "rxjs";
import {Claim} from "../models/claim";

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  API_URL: string = "http://localhost:8080/api/";

  constructor(private http: HttpClient) {
  }

  createClaim(claimDTO: ClaimDto): Observable<Claim> {
    return this.http.post<Claim>(this.API_URL + "claims", claimDTO);
  }

  updateClaim(claimDTO: ClaimDto): Observable<Claim> {
    return this.http.put(this.API_URL + "claims", claimDTO);
  }

  deleteClaim(claimId?: number): Observable<any> {
    return this.http.delete(this.API_URL + "claims/" + claimId);
  }

  getById(claimId: string): Observable<Claim> {
    return this.http.get<Claim>(this.API_URL + "claim/" + claimId);
  }

  getAll(): Observable<Claim[]> {
    return this.http.get<Claim[]>(this.API_URL + "claims");
  }
}
