import {Component, OnInit} from '@angular/core';
import {ClaimService} from "../services/claim.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Claim} from "../models/claim";
import {ClaimDto} from "../dtos/claim-dto";
import {ClaimMapperService} from "../services/claim-mapper.service";

@Component({
  selector: 'app-claim-edit',
  templateUrl: './claim-edit.component.html',
  styleUrls: ['./claim-edit.component.css']
})
export class ClaimEditComponent implements OnInit {

  claimDTO: ClaimDto = new ClaimDto();
  isLoaded: boolean = false;

  constructor(private claimService: ClaimService,
              private mapper: ClaimMapperService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getClaimByNumber(id!);
  }

  getClaimByNumber(id: string) {
    this.claimService.getById(id)
      .subscribe(data => {
        this.claimDTO = this.mapper.toDTO(data);
        this.isLoaded = true;
      })
  }
}
