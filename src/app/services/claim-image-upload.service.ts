import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppComponent} from "../app.component";
import {Claim} from "../models/claim";
import {Form} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ClaimImageUploadService {

  constructor(private http: HttpClient) {
  }

  addClaimImage(claimId: number, formData: FormData): Observable<string> {
    return this.http.post(AppComponent.API_URL + "upload", formData, {
      responseType: 'text',
      params: {
        claimId: claimId
      }
    });
  }

  updateClaimImage(claimId: number, formData: FormData): Observable<Claim> {
    return this.http.put(AppComponent.API_URL + "claim/" + claimId + "/image", formData, {
      params: {
        claimId: claimId
      }
    })
  }

  downloadClaimImage(fileName: string): Observable<Blob> {
    return this.http.get(AppComponent.API_URL + "download/" + fileName, {
      responseType: 'blob'
    });
  }

  deleteClaimImage(claimId: number): Observable<Claim> {
    return this.http.delete(AppComponent.API_URL + "claim/" + claimId + "/image");
  }
}
