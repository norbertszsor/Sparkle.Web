import { Component, Input } from '@angular/core';
import { PredictionDto } from 'src/models/data.model';
import { SparkleDatePipe } from 'src/shared/module/date.pipe';
import { SparkleDecimal } from 'src/shared/module/decimal.pipe';
import { Dictionary } from 'src/shared/module/dictionary.interface';

@Component({
  selector: 'sparkle-ui-scrollable-list',
  templateUrl: './sparkle-ui-scrollable-list.component.html',
  styleUrls: ['./sparkle-ui-scrollable-list.component.scss'],
})
export class SparkleUiScrollableListComponent {
  private _items: Dictionary<string, number> = [];
  scrollableListItems: string[] = [];

  @Input()
  set items(value: Dictionary<string, number>) {
    this._items = value;
  }

  get items(): Dictionary<string, number> {
    return this._items;
  }
}
