import {Injectable} from '@angular/core';
import {Claim} from "../models/claim";
import {ClaimDto} from "../dtos/claim-dto";

@Injectable({
  providedIn: 'root'
})
export class ClaimMapperService {

  constructor() {
  }

  toDTO(claim: Claim): ClaimDto {
    const claimDTO = new ClaimDto();
    claimDTO.claimId = claim.id;
    claimDTO.claimNumber = claim.number;
    claimDTO.claimStatus = claim.status;
    claimDTO.claimCreationDate = claim.creationDate;
    claimDTO.claimAccidentDate = claim.accidentDate;
    claimDTO.claimImageUrl = claim.imageUrl;
    claimDTO.contractId = claim.contract!.id;
    claimDTO.contractAssuredName = claim.contract!.assuredName;
    claimDTO.contractNumber = claim.contract!.number;
    claimDTO.contractEndDate = claim.contract!.endDate;
    claimDTO.contractStartDate = claim.contract!.startDate;
    claimDTO.contractVehicleImmat = claim.contract!.vehicleImmat;

    return claimDTO;
  }
}
