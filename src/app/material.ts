import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';


import {NgModule} from '@angular/core';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,
           MatIconModule,MatMenuModule,MatFormFieldModule,MatInputModule,MatListModule,MatSidenavModule,MatDialogModule,MatBadgeModule,MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,
           MatFormFieldModule,MatInputModule,MatListModule,MatSidenavModule,MatDialogModule,MatBadgeModule,MatCardModule],
})
export class MaterialModule { }