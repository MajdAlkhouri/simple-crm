import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new User(); // um mit user model zu kombinieren 
  allUsers : User[] = [];  //
  
  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void { //!!!
    this.firestore
    .collection('users')// was ist collection
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes: any) =>{// was ist subscribe hier
      console.log('Recived changes', changes);
      this.allUsers = changes; // die array wird ausgefühlt mit den änderungen
    });

  }


  openDialog(){
    this.dialog.open(DialogAddUserComponent);
  }

}
