import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClaimService} from "../services/claim.service";
import {Claim} from "../models/claim";
import {AppComponent} from "../app.component";
import {ClaimImageUploadService} from "../services/claim-image-upload.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {

  id: any = null;
  claim?: Claim;
  imageUrl: any = null;


  constructor(private route: ActivatedRoute,
              private claimImageUploadService: ClaimImageUploadService,
              private sanitizer: DomSanitizer,
              private claimService: ClaimService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getClaimById(this.id!);
  }

  getClaimById(id: number) {
    this.claimService.getById(id)
      .subscribe(data => {
        this.claim = data;
        this.loadClaimImage();
      })
  }

  private loadClaimImage(): void {
    if (this.claim?.imageUrl !== null) {
      this.claimImageUploadService.downloadClaimImage(this.claim?.imageUrl!)
        .subscribe(data => {
          this.createImageFromBlob(data);
        })
    } else {
      this.imageUrl = AppComponent.noContentImagePath;
    }
  }

  private createImageFromBlob(imageAsBlob: Blob): void {
    const imageReader = new FileReader();
    imageReader.addEventListener("load", () => {
      if (typeof imageReader.result === "string") {
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(imageReader.result);
      }
    }, false);

    if (imageAsBlob) {
      imageReader.readAsDataURL(imageAsBlob);
    }
  }
}
