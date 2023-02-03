import { Component, Input } from '@angular/core';

@Component({
  selector: 'pst-indicator',
  templateUrl: './pst-indicator.component.html',
})
export class PstIndicatorComponent {
  @Input() passwordStrength: string = 'empty';
}
