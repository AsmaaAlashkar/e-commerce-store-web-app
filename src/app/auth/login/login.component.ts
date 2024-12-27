import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private router: Router) {}
  login() {
    if (this.username === 'admin' && this.password === 'adminUser') {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/products']);
    } else if (this.username === 'test' && this.password === 'testUser') {
      localStorage.setItem('role', 'user');
      this.router.navigate(['/categories']);
    } else {
      alert('Invalid credentials');
    }
  }
}
