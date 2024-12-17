import { Component } from '@angular/core';

@Component({
  selector: 'lib-counter',
  standalone: true,
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  count = 0;

  onClick() {
    this.count++;
  }
}
