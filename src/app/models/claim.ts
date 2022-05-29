import {ClaimStatus} from "../enums/claim-status";
import {Contract} from "./contract";

export class Claim {
  constructor(public id?:number,public number?: number, public accidentDate?: Date, public creationDate?: Date, public status?: ClaimStatus,
              public imageUrl?: string, public contract?: Contract) {}
}
