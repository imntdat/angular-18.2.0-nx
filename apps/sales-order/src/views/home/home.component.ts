import { Component } from '@angular/core';

import {
  CounterComponent,
  HelloWorldComponent,
  SharedModules,
  toLowerCase,
} from '@so/shared';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [...SharedModules, CounterComponent, HelloWorldComponent],
})
export class HomeComponent {
  message = toLowerCase('WELCOME HOME...');
}
