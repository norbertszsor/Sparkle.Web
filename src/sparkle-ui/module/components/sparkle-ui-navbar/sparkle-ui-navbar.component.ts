import { Component, Input } from '@angular/core';

@Component({
  selector: 'sparkle-ui-navbar',
  templateUrl: './sparkle-ui-navbar.component.html',
  styleUrls: ['./sparkle-ui-navbar.component.scss'],
})
export class SparkleUiNavbarComponent {
  @Input() appTitle: string | null = null;
  @Input() logoPath: string | null = null;
}
