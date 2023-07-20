import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { User } from './models';

const ELEMENT_DATA: User[] = [
  {id:1, name:'Enzo', surname:'Fernandez', email:'Efe@mail.com', password:'Ef14Kbz', grade:8}
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
  public users: User[] = ELEMENT_DATA;
  constructor(private matDialog: MatDialog) {
  }


  onCreateUser():void {
    const dialogRef = this.matDialog.open(UserFormDialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (v) => {
        if (v) {
          console.log('Recibimos el valor', v);

          this.users = [
            ...this.users, {
              id: this.users.length + 1,
              name: v.name,
              surname: v.surname,
              email: v.email,
              password: v.password,
              grade: v.grade
            }
          ]
        } else {
          console.log('Se cancelo');
        }
      }
    })
  }
}