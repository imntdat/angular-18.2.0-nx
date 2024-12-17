import { Component } from '@angular/core';

import {
  CounterComponent,
  HelloWorldComponent,
  toLowerCase,
} from '@libs/shared';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CounterComponent, HelloWorldComponent],
})
export class HomeComponent {
  message = toLowerCase('WELCOME HOME...');
}
