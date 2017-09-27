import { Component } from '@angular/core';
import { AccPays } from '../../_support/index';
import { ServicesRest } from '../../_services/services.rest';

@Component({
  moduleId: module.id,
  selector: 'pays',
  templateUrl: 'pays.component.html',
  styleUrls: ['pays.component.css']
})
export class PaysComponent {
  accId: string;
  accPays: AccPays[];
  errorMessage: string;

  constructor(private servicesRest: ServicesRest) {
  }

  getAccPays(accId: string) {
    this.accId = accId;
    this.servicesRest.getAccPays(accId)
      .subscribe(accPays => {
          this.accPays = accPays;
          this.accPays.sort( function(item1, item2) {
            if ( item1.pay_id < item2.pay_id ){
              return -1;
            }else if( item1.pay_id > item2.pay_id ){
              return 1;
            }else{
              return 0;
            }
          });
          console.error(this.accPays)
        },
        error => this.errorMessage = <any> error
      );
  }
}
