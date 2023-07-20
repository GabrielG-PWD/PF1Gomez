import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
  nameControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  surnameControl = new FormControl(null, [Validators.required]);
  emailControl = new FormControl(null, [Validators.required]);
  passwordControl = new FormControl(null, [Validators.required]);
  gradeControl = new FormControl(null, [Validators.required]);

  userForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl,
    grade: this.gradeControl
  })

  onSubmit(): void {
    alert(JSON.stringify(this.userForm.value))
  }
}
