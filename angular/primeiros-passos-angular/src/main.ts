// PONTO DE ENTRADA DA APP ANGULAR


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// DEFINE O COMPONENTE PRINCIPAL DA APLICAÇÃO
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
