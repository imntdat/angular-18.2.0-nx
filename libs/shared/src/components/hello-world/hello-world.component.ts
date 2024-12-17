import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-hello-world',
  standalone: true,
  templateUrl: './hello-world.component.html',
})
export class HelloWorldComponent {
  @Input() message = 'Hello World!!!';
}
