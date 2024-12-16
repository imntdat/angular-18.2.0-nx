import { Component } from '@angular/core';

import { CounterComponent, HelloWorldComponent } from '@libs/components';
import { toLowerCase } from '@libs/utils';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CounterComponent, HelloWorldComponent],
})
export class HomeComponent {
  message = toLowerCase('WELCOME HOME...');
}
