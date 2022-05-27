import {Component, OnInit} from '@angular/core';
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

  isFormSubmitted = false;

  createClaimForm = this.formBuilder.group({
      claimNumber: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.minLength(1)]],
      claimAccidentDate: ['', [Validators.required]],
      claimCreationDate: ['', [Validators.required]],
      claimStatus: ['', [Validators.required]],
      contractNumber: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.minLength(1)]],
      contractStartDate: ['', [Validators.required]],
      contractEndDate: ['', [Validators.required]],
      contractAssuredName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      contractVehicleImmat: ['', [Validators.required, Validators.minLength(7), Validators.pattern(/^[0-9]\d*$/)]]
    }, {updateOn: 'submit'}
  )

  constructor(private formBuilder: FormBuilder,
              private claimService: ClaimService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createClaim(): void {
    this.isFormSubmitted = true;
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

    this.claimService.createClaim(claimDTO)
      .subscribe(data => this.router.navigate(['/claims']));
  }
}
