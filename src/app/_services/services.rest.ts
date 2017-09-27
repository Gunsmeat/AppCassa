import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { AccInfo, AccFba, AccParam, AccChr, AccCnt, AccRecalc }    from '../_support/index';
import 'rxjs/Rx';

@Injectable()
export class ServicesRest {
  //URL-адрес REST сервера
  //restUrl: string = "http://192.168.0.10:8080/erkc/";
  //restUrl: string = "http://192.168.0.99:8080/CasaTestRest_war/";
  restUrl: string = "http://192.168.0.98:8088/CasaTestRest_war/";

  constructor(private http: Http) {

  }

  // Получение общей информациии о лицевом счете
  getAccInfo(accId: string) {
    return this.http.get(this.restUrl + "acc/"  + accId)
      .map(res => <AccInfo> res.json())
      .catch(this.handleError);
  }

  // Получение оборотов лицевого счета
  getAccFba(accId: string) {
    return this.http.get(this.restUrl + "fba/"  + accId)
      .map(res => <AccFba[]> res.json())
      .catch(this.handleError);
  }

  // Получение параметров лицевого счета
  getAccParam(accId: string) {
    return this.http.get(this.restUrl + "param/"  + accId)
      .map(res => <AccParam> res.json())
      .catch(this.handleError);
  }

  // Получение списка платежей лицевого счета
  getAccPays(accId: string) {
    return this.http.get(this.restUrl + "pay/"  + accId)
      .map(res => <AccParam> res.json())
      .catch(this.handleError);
  }

  // Получение сведений о начислениях по лицевому счету
  getAccChr(accId: string) {
    return this.http.get(this.restUrl + "norm/"  + accId)
      .map(res => <AccChr[]> res.json())
      .catch(this.handleError);
  }

  // Получение сведений о тарифах по лицевому счету
  getAccTariff(accId: string) {
    return this.http.get(this.restUrl + "trf/"  + accId)
      .map(res => <AccParam> res.json())
      .catch(this.handleError);
  }

  // Получение сведений об индивидуальных приборах учета
  getAccCnt(accId: string) {
    return this.http.get(this.restUrl + "cnt/"  + accId)
      .map(res => <AccCnt[]> res.json())
      .catch(this.handleError);
  }

  // Получение сведений о перерасчетах по лицевому счету
  getAccRecalc(accId: string) {
    return this.http.get(this.restUrl + "recalc/"  + accId)
      .map(res => <AccRecalc[]> res.json())
      .catch(this.handleError);
  }

  // Обработчик ошибок
  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
