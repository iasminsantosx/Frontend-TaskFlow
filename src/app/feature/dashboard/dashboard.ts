import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule],
  template: `
    <h1 class="mb-6 text-3xl font-bold">
      Dashboard
    </h1>

    <mat-card>
      <mat-card-content>
        <p>Bem-vindo ao TaskFlow!</p>
        <p>O layout principal está funcionando.</p>
      </mat-card-content>
    </mat-card>
  `
})
export class Dashboard {}