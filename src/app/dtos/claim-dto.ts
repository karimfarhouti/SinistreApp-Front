import {ClaimStatus} from "../enums/claim-status";

export class ClaimDto {
  constructor(public claimNumber?: Number, public claimAccidentDate?: Date, public claimCreationDate?: Date,
              public claimStatus?: ClaimStatus, public contractNumber?: Number, public contractStartDate?: Number,
              public contractEndDate?: Date, public contractAssuredName?: string, public contractVehicleImmat?: string) {
  }
}
