import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})
export class UserFormDialogComponent {
  nameControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  surnameControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  emailControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required]);
  gradeControl = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]);

  userForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl,
    grade: this.gradeControl
  })

  constructor(private dialogRef: MatDialogRef<UserFormDialogComponent>) {}
  
  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.dialogRef.close(this.userForm.value)
    }
  }
}
