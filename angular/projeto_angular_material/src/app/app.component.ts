import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './Material/Material.module';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterContentInit {
  title = 'projeto_angular_material';
  taAbrido = true;

  @ViewChild(MatSidenav) sidneav?: MatSidenav;

  constructor(private bpObserver: BreakpointObserver) {}

  ngAfterContentInit(): void {
    // Observa o tempo inteiro o tamanho da tela
    this.bpObserver.observe(['(max-width: 800px)']).subscribe({
      next: (res) => {
        if (!this.sidneav) return;
        // verifica se dá match com a condição estabelecida ou seja se width tem no max 800px
        if (res.matches) {
          this.sidneav.mode = 'side';
          this.sidneav.close();
          this.taAbrido = false;
        } else {
          this.sidneav.mode = 'push';
          this.sidneav.open();
          this.taAbrido = true;
        }
      },
    });
  }
}
