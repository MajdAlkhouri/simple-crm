import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate:any= Date; // any ist wichtig
  loading = false; 


  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>,private firestore: AngularFirestore) {}

  ngOnInit(): void {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user ist', this.user);
    this.loading = true; // wenn wir auf save klicken 
    
    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result: any) =>  {
      this.loading = false; // wenn wir fertig geladen haben 
      console.log('Adding user finisched', result);
      this.dialogRef.close();
    });
  }
}
