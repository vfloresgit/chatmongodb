import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public authservice: AuthService,    
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 


    }

  ngOnInit() {
  }

  cerrarSesion(): void{
     
    this.authservice.logout()
    this.dialogRef.close();
     
  }

  cancelar(): void{
    this.dialogRef.close();
  }

}
