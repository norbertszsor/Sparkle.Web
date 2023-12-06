import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sparkle-ui-no-connection-modal',
  templateUrl: './sparkle-ui-no-connection-modal.component.html',
  styleUrls: ['./sparkle-ui-no-connection-modal.component.scss'],
})
export class SparkleUiNoConnectionModalComponent {
  @Output() recconnectClicked = new EventEmitter<void>();

  onClick() {
    this.recconnectClicked.emit();
  }
}
