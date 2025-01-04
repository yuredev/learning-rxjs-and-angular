import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  imports: [],
  template: `<p>page1 works!</p>`,
  styleUrl: './page1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page1Component { }
