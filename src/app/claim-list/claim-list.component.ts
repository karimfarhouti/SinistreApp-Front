import {Component, OnInit} from '@angular/core';
import {ClaimService} from "../services/claim.service";
import {Claim} from "../models/claim";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent implements OnInit {

  claimList: Claim[] = [];
  isConfirmClicked = false;

  constructor(private claimService: ClaimService,
              private modalService: NgbModal) {
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

  open(deleteModal: any) {
    this.modalService.open(deleteModal, {ariaLabelledBy: 'modal-basic-title'});
  }

  deleteClaim(claimId?: number): void {
    this.isConfirmClicked = true;
    this.claimService.deleteClaim(claimId)
      .subscribe(data => {
        this.ngOnInit();
        this.modalService.dismissAll();
        this.isConfirmClicked = false;
      }, error => {
        this.isConfirmClicked = false;
      });
  }

}
