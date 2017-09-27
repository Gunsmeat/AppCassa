import { ChargesComponent, CountersComponent, FBAComponent, MainComponent, ParametersComponent } from './index';
import { PaymentComponent, PaysComponent, RecalculationsComponent, TariffsComponent } from './index';

export const RoutsRoot = [
  { path: "chr", component: ChargesComponent },
  { path: "cnt", component: CountersComponent },
  { path: "fba", component: FBAComponent },
  { path: "main", component: MainComponent },
  { path: "param#openPopup", component: ParametersComponent },
  { path: "payment", component: PaymentComponent },
  { path: "pays", component: PaysComponent },
  { path: "recalc", component: RecalculationsComponent },
  { path: "trf", component: TariffsComponent },
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "**", redirectTo: "main" }
]
