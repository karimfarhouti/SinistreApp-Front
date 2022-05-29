import {Pipe, PipeTransform} from '@angular/core';
import {ClaimStatus} from "../enums/claim-status";

@Pipe({
  name: 'claimStatus'
})
export class ClaimStatusPipe implements PipeTransform {

  transform(status?: ClaimStatus): any {
    if (status === null || status === undefined) return "";
    else if (status === ClaimStatus.OPEN) return "Ouvert";
    else if (status === ClaimStatus.EXPERTISE) return "Expertise";
    return "Fermé";
  }

}
