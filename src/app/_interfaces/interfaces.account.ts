export interface AccInfo {
  acc_id:       number;
  ls_n:         number;
  obj_id:       number;
  dst_id:       number;
  dst_name:     string;
  str_id:       number;
  str_name:     string;
  house:        string;
  krps:         string;
  flat:         string;
  address:      string;
  first_name:   string;
  last_name:    string;
  moh_id:       number;
  moh_name:     string;
  status:       number;
  date_open:    string;
  date_close:   string;
  date_rec:     string;
  user_name:    string;
  type_change:  string;
  gis_id:       string;
  doc_id:       number;
}

export interface AccParam {
  acc_id:           number;
  tenants:          string;
  area_general:     string;
  area_residential: string;
  area_heated:      string;
  property:         number;
  privatization:    number;
  communal:         number;
  type_habitation:  number;
  intercom:         number;
  lifting_barrier:  number;
}

export interface AccPays {
  acc_id:           number;
  date_pay:         string;
  npp:              number;
  cassa_id:         number;
  pack_id:          number;
  type_pay:         string;
  status:           string;
  user_name:        string;
  pay_id:           number;
  sum_pay:          number;
}

export interface AccFba {
  acc_id:       number;
  item:         number;
  srv_id:       number;
  srv_name:     string;
  sup_id:       number;
  sup_name:     string;
  cnt_type:     string;
  rest_b:       number;
  chr_norm:     number;
  recalc:       number;
  pay_total:    number;
  sum_for_pay:  number;
  sum_af:       number;
  sum_for_pay_total: number;
  rest_cur:     number;
  pay_cur:      number;
}

export interface AccChr {
  acc_id:       number;
  srv_name:     string;
  sup_name:     string;
  tariff_type:  number;
  tariff:       number;
  qty:          number;
  trf_norm:     number;
  unit_name:    string;
  norm:         number;
  date_rec:     string;
  status:       number;
}

export interface AccCnt {
  acc_id:       number;
  cnt_no:       number;
  srv_name:     string;
  sup_name:     string;
  pic_name:     string;
  val_prev:     number;
  val_last:     number;
  qty:          number;
  trf_norm:     number;
  koef:         number;
  date_open:    string;
  date_close:   string;
}

export interface AccRecalc {
  acc_id:       number;
  date_change:  number;
  date_range:   string;
  srv_name:     string;
  sup_name:     string;
  sum_change:   number;
  description:  string;
}
