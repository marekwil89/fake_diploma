import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreatorComponent } from './creator.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CreatorComponent],
  exports: [CreatorComponent],
  imports: [
    MatStepperModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreatorComponent
      }
    ])
  ],
  
})
export class CreatorModule { }
