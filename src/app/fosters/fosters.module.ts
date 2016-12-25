import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FosterService } from './shared/foster.service';
import { FosterRoutingModule } from './fosters-routing.module';
import { FosterListComponent } from './foster-list/foster-list.component';
import { FosterDetailsComponent } from './foster-details/foster-details.component';
import { FosterSearchComponent } from './foster-search/foster-search.component';

// var firebaseConfig = {
//   apiKey: "AIzaSyAZzpZC5wyI41Md_psKG87upvgSt05ujPo",
//   authDomain: "foster-14559.firebaseapp.com",
//   databaseURL: "https://foster-14559.firebaseio.com",
//   storageBucket: "foster-14559.appspot.com",
//   messagingSenderId: "677395751311"
// };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FosterRoutingModule
  ],
  declarations: [
    FosterListComponent,
    FosterDetailsComponent,
    FosterSearchComponent
  ],
  exports: [
    FosterListComponent,
    FosterSearchComponent
  ],
  providers: [
    FosterService
  ]
})
export class FostersModule { }
