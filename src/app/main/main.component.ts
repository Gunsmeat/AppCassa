import { Component, ViewChild } from '@angular/core';
import { AccInfo, AccFba } from '../_support/index';
import { ServicesRest } from '../_services/services.rest';
import { ParametersComponent } from './parameters/parameters.component';
import { PaysComponent } from './pays/pays.component';
import { ChargesComponent } from "./charges/charges.component";
import { CountersComponent } from "./counters/counters.component";
import { RecalculationsComponent } from "./recalculations/recalculations.component";



@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  accInfo: AccInfo;
  accFba: AccFba[];

  accId: string;
  updUrl: string;
  // Флаг наличия платежного документа
  isDoc: boolean;

  errorMessage: string;

  @ViewChild(ParametersComponent)
  paramComp: ParametersComponent;

  @ViewChild(PaysComponent)
  paysComp: PaysComponent;

  @ViewChild(ChargesComponent)
  chrComp: ChargesComponent;

  @ViewChild(CountersComponent)
  cntComp: CountersComponent;

  @ViewChild(RecalculationsComponent)
  recalcComp: RecalculationsComponent;

  constructor(private servicesRest: ServicesRest) {
  }
  // Обработка нажатия на кнопку ПОИСК
  getAccInfo()
  {
    // Получение сведений о лицевом счете
    this.servicesRest.getAccInfo(this.accId)
      .subscribe(accInfo => {
          this.accInfo = accInfo;
          console.error(this.accInfo);
          // Проверка наличия платежного документа
          this.updUrl = this.servicesRest.restUrl + "upd/" + this.accId;
          if (this.accInfo.doc_id > 0) this.isDoc = true;
          else this.isDoc = false;
        },
        error => this.errorMessage = <any> error
      );
    // Получение сведений об оборотах лицевого счета
    this.servicesRest.getAccFba(this.accId)
      .subscribe(accFba => {
          this.accFba = accFba;
          // Сортировка услуг
          this.accFba.sort( function(item1, item2) {
            if ( item1.item < item2.item ){
              return -1;
            }else if( item1.item > item2.item ){
              return 1;
            }else{
              return 0;
            }
          });
          console.error(this.accFba)
        },
        error => this.errorMessage = <any> error
      )
  }
  // Параметры лицевого счета
  getAccParam()
  {
    this.paramComp.getAccParam(this.accId);
  }
  // Параметры лицевого счета
  getAccPays()
  {
    this.paysComp.getAccPays(this.accId);
  }
  // Нормативы лицевого счета
  getAccChr()
  {
    this.chrComp.getAccChr(this.accId);
  }
  // Счетчики лицевого счета
  getAccCnt()
  {
    this.cntComp.getAccCnt(this.accId);
  }
  // Перерасчеты лицевого счета
  getAccRecalc()
  {
    this.recalcComp.getAccRecalc(this.accId);
  }
}
