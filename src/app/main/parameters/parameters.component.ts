import { Component } from '@angular/core';
import { AccParam } from '../../_support/index';
import { ServicesRest } from '../../_services/services.rest';

@Component({
  moduleId: module.id,
  selector: 'parameters',
  templateUrl: 'parameters.component.html',
  styleUrls: ['parameters.component.css']
})
export class ParametersComponent {
  accId: string;
  accParam: AccParam;
  errorMessage: string;

  constructor(private servicesRest: ServicesRest) {
  }

  getAccParam(accId: string) {
    this.accId = accId;
    this.servicesRest.getAccParam(accId)
      .subscribe(accParam => {
          this.accParam = accParam;
          console.error(this.accParam)
        },
        error => this.errorMessage = <any> error
      );
  }
}
