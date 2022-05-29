import {Component, Input, OnInit} from '@angular/core';
import {ClaimImageUploadService} from "../services/claim-image-upload.service";
import {Claim} from "../models/claim";
import {DomSanitizer} from "@angular/platform-browser";
import {ClaimDto} from "../dtos/claim-dto";
import {ClaimMapperService} from "../services/claim-mapper.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  @Input() claimDTO!: ClaimDto;
  file: any = null;
  imageUrl: any = null;
  noContentImagePath: string = '/assets/no-content-image.png';
  isConfirmClicked = false;

  constructor(private claimImageUploadService: ClaimImageUploadService,
              private dtoMapper: ClaimMapperService,
              private modalService: NgbModal,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.loadClaimImage();
  }

  onChange(event: any): void {
    this.file = event.target.files[0];
  }

  upload(): void {
    if (this.file) {
      const formData = new FormData();
      formData.append('claimImage', this.file);
      this.claimImageUploadService.addClaimImage(this.claimDTO.claimId!, formData)
        .subscribe(data => {
          this.claimDTO.claimImageUrl = data;
          this.ngOnInit();
        });
    }
  }

  update():void{
    if (this.file) {
      const formData = new FormData();
      formData.append('claimImage', this.file);
      this.claimImageUploadService.updateClaimImage(this.claimDTO.claimId!, formData)
        .subscribe(data => {
          this.claimDTO = this.dtoMapper.toDTO(data);
          this.ngOnInit();
        });
    }
  }

  delete(): void {
    this.isConfirmClicked = true;
    this.claimImageUploadService.deleteClaimImage(this.claimDTO.claimId!)
      .subscribe(data => {
        this.claimDTO = this.dtoMapper.toDTO(data);
        this.modalService.dismissAll();
        this.ngOnInit();
      })
    this.isConfirmClicked = false;
  }

  open(deleteModal: any) {
    this.modalService.open(deleteModal, {ariaLabelledBy: 'modal-basic-title'});
  }

  private loadClaimImage(): void {
    if (this.claimDTO.claimImageUrl !== null) {
      this.claimImageUploadService.downloadClaimImage(this.claimDTO.claimImageUrl!)
        .subscribe(data => {
          this.createImageFromBlob(data);
        })
    } else {
      this.imageUrl = this.noContentImagePath;
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
