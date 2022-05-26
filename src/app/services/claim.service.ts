import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClaimDto} from "../dtos/claim-dto";
import {Observable} from "rxjs";
import {Claim} from "../models/claim";

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  API_URL: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) {}

  createClaim(claimDTO: ClaimDto): Observable<Claim> {
    return this.http.post(this.API_URL + "/claims", claimDTO);
  }
}
