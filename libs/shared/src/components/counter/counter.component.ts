import { Component } from '@angular/core';

@Component({
  selector: 'shared-counter',
  standalone: true,
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  count = 0;

  onClick() {
    this.count++;
  }
}
