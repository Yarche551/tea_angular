import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { MainRoutingModule } from './main-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { Main } from './pages/main/main';

@NgModule({
  declarations: [Main],
  imports: [CommonModule, NgbAccordionModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
