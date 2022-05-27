import {Component, OnInit} from '@angular/core';
import {ClaimService} from "../services/claim.service";
import {Claim} from "../models/claim";

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent implements OnInit {

  claimList: Claim[] = [];

  constructor(private claimService: ClaimService,
              private modalService:ModalS) {
  }

  ngOnInit(): void {
    this.getAll();
  }


  getAll(): void {
    this.claimService.getAll()
      .subscribe(data => {
        this.claimList = data;
      })
  }

  open(deleteModal:any) {

  }
}
