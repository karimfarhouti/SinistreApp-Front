import {ClaimStatus} from "../enums/claim-status";

export class ClaimDto {
  constructor(public claimId?: number, public claimNumber?: number, public claimAccidentDate?: Date, public claimCreationDate?: Date,
              public claimStatus?: ClaimStatus, public claimImageUrl?: string, public contractId?: number, public contractNumber?: number, public contractStartDate?: Date,
              public contractEndDate?: Date, public contractAssuredName?: string, public contractVehicleImmat?: string) {
  }
}
