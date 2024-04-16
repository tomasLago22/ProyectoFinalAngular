import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { retry } from 'rxjs';
import { Usuario } from '../../models';

@Component({
  selector: 'app-usuario-dialogo',
  templateUrl: './usuario-dialogo.component.html',
  styleUrl: './usuario-dialogo.component.scss'
})
export class UsuarioDialogoComponent {

userForm : FormGroup;


constructor (
  private formBuilder : FormBuilder ,
  private matDialogRef: MatDialogRef <UsuarioDialogoComponent>,
  @Inject(MAT_DIALOG_DATA) private editandoUsuario? : Usuario
){
  console.log(editandoUsuario)
this.userForm = this.formBuilder.group({
  firstName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
  lastName: ['' , [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
  email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')]],
  role: ['USER', Validators.required],


  
})
if(editandoUsuario){
  this.userForm.patchValue(editandoUsuario)
    } 

}

get firstNameControl(){
  return this.userForm.get('firstName');
}

get lastNameControl(){
  return this.userForm.get('lastName');
}

onSave(): void{
  if(this.userForm.invalid){
    this.userForm.markAllAsTouched();
  }else{
    this.matDialogRef.close(this.userForm.value);
  }
}



}
