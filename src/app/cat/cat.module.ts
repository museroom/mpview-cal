import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatComponent} from './cat.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule} from 'angular-calendar';

// import {UtilsModule} from '../utils/module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CalendarModule
    // UtilsModule
  ],
  declarations: [
    CatComponent
  ],
  exports: [
    CatComponent
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatModule {
}
