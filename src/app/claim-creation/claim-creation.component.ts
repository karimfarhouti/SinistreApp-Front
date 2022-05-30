import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ClaimDto} from "../dtos/claim-dto";
import {ClaimService} from "../services/claim.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-claim-creation',
  templateUrl: './claim-creation.component.html',
  styleUrls: ['./claim-creation.component.css']
})
export class ClaimCreationComponent implements OnInit {

  @Input() claimDTO?: ClaimDto;

  isFormSubmitted = false;
  errorMessage: string | null = null;

  createClaimForm = this.formBuilder.group({
      claimNumber: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      claimAccidentDate: [this.claimDTO ? this.claimDTO.claimAccidentDate : '', [Validators.required]],
      claimCreationDate: [this.claimDTO ? this.claimDTO.claimCreationDate : '', [Validators.required]],
      claimStatus: [this.claimDTO ? this.claimDTO.claimStatus : '', [Validators.required]],
      contractNumber: [this.claimDTO ? this.claimDTO.contractNumber : '', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      contractStartDate: [this.claimDTO ? this.claimDTO.contractStartDate : '', [Validators.required]],
      contractEndDate: [this.claimDTO ? this.claimDTO.contractEndDate : '', [Validators.required]],
      contractAssuredName: [this.claimDTO ? this.claimDTO.contractAssuredName : '', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      contractVehicleImmat: [this.claimDTO ? this.claimDTO.contractVehicleImmat : '', [Validators.required, Validators.minLength(3), Validators.pattern(/^[0-9]\d*$/)]]
    }, {updateOn: 'submit'}
  )

  constructor(private formBuilder: FormBuilder,
              private claimService: ClaimService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createClaimForm.patchValue(this.claimDTO!);
  }

  createOrUpdateClaim(): void {
    this.isFormSubmitted = true;
    if (this.createClaimForm.valid) {
      const claimDTO = this.createDtoFromFormValues();
      claimDTO.claimId = this.claimDTO?.claimId;
      claimDTO.contractId = this.claimDTO?.contractId;

      if (this.claimDTO === null || this.claimDTO === undefined) {
        this.claimService.createClaim(claimDTO)
          .subscribe(data => this.router.navigate(['/claims']));
      } else {
        this.claimService.updateClaim(claimDTO)
          .subscribe(data => this.router.navigate(['/claims']));
      }
    }
  }

  private createDtoFromFormValues(): ClaimDto {
    const claimNumber = this.createClaimForm.get(['claimNumber'])?.value;
    const claimAccidentDate = this.createClaimForm.get(['claimAccidentDate'])?.value;
    const claimCreationDate = this.createClaimForm.get(['claimCreationDate'])?.value;
    const claimStatus = this.createClaimForm.get(['claimStatus'])?.value;
    const contractNumber = this.createClaimForm.get(['contractNumber'])?.value;
    const contractStartDate = this.createClaimForm.get(['contractStartDate'])?.value;
    const contractEndDate = this.createClaimForm.get(['contractEndDate'])?.value;
    const contractAssuredName = this.createClaimForm.get(['contractAssuredName'])?.value;
    const contractVehicleImmat = this.createClaimForm.get(['contractVehicleImmat'])?.value;

    const claimDTO = new ClaimDto();
    claimDTO.claimNumber = claimNumber;
    claimDTO.claimAccidentDate = claimAccidentDate;
    claimDTO.claimCreationDate = claimCreationDate;
    claimDTO.claimStatus = claimStatus;
    claimDTO.contractNumber = contractNumber;
    claimDTO.contractStartDate = contractStartDate;
    claimDTO.contractEndDate = contractEndDate;
    claimDTO.contractAssuredName = contractAssuredName;
    claimDTO.contractVehicleImmat = contractVehicleImmat;

    return claimDTO;
  }
}
