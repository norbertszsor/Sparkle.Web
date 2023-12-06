import { NgModule } from '@angular/core';
import { SparkleDatePipe } from './module/date.pipe';
import { SparkleDecimal } from './module/decimal.pipe';

@NgModule({
  declarations: [SparkleDatePipe, SparkleDecimal],
  imports: [],
  exports: [SparkleDatePipe, SparkleDecimal],
})
export class SharedModule {}
