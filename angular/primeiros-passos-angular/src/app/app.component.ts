import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { CommonModule } from '@angular/common';
import { CachorroServiceService } from './services/cachorro-service.service';

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
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.texto = 'Alterou de dentro do timeout';
    }, 3000);
  }
  title = 'primeiros-passos-angular';
  currentComponent?: number;
  valor = 0;
  texto?: string;
  urlFotoCachorro?: string;

  constructor(private cachorroService: CachorroServiceService) {}

  alteraValor(): void {
    this.texto = 'Alterado para ' + this.valor++;
  }

  fetchFotoCachorro() {
    this.cachorroService.getFotoCachorro().subscribe({
      next: (valor) => {
        this.urlFotoCachorro = valor.message;
      },
      error: (err) => {
        alert('Erro na request');
      },
    });
  }

  switchComponent(compNumber: number): void {
    console.log(this.currentComponent);
    this.currentComponent = compNumber;
  }
}
