import {ClaimStatus} from "../enums/claim-status";

export class ClaimDto {
  constructor(public claimId?: Number, public claimNumber?: Number, public claimAccidentDate?: Date, public claimCreationDate?: Date,
              public claimStatus?: ClaimStatus, public contractId?: Number, public contractNumber?: Number, public contractStartDate?: Date,
              public contractEndDate?: Date, public contractAssuredName?: string, public contractVehicleImmat?: string) {
  }
}
