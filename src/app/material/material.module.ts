import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
<<<<<<< HEAD
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
=======
import { MatTabsModule } from '@angular/material/tabs';
>>>>>>> 73f0b3b62d05045f4ddd2bcd198ec57d9f390e90


const material = [
  MatSlideToggleModule,
  MatStepperModule,
  MatTabsModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatExpansionModule,
  MatSelectModule,
  MatTabsModule
];

@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule { }
