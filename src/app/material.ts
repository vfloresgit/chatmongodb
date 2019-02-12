import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {NgModule} from '@angular/core';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,
           MatIconModule,MatMenuModule,MatFormFieldModule,MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,
           MatFormFieldModule,MatInputModule],
})
export class MaterialModule { }