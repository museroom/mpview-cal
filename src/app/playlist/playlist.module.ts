import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdSliderModule
} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSliderModule,
    NgbModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdSliderModule
  ],
  declarations: []
})
export class PlaylistModule {
}
