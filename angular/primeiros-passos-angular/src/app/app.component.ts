import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'primeiros-passos-angular';
  currentComponent?: number;

  switchComponent(compNumber: number): void {
    console.log(this.currentComponent);
    this.currentComponent = compNumber;
  }
}
