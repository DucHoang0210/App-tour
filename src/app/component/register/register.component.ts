import { RegisterService } from '../../services/register.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Register } from '../../models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  register: Register = new Register();
  constructor( private registerService: RegisterService,
                private router: Router ) { }

  onSubmit() {

  }

  isRegisterMode = false;
  toggle() {
    this.isRegisterMode = !this.isRegisterMode;
  }
}
