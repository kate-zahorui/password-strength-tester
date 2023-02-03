import { Component, Input } from '@angular/core';

@Component({
  selector: 'pst-indicator',
  templateUrl: './pst-indicator.component.html',
  styleUrls: ['./pst-indicator.component.css'],
})
export class PstIndicatorComponent {
  @Input() passwordStrength: string = 'empty';
}
