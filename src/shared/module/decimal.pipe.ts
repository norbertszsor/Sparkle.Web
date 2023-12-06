import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

export const sparkleDecimalPipe = new DecimalPipe('en-US');

@Pipe({
  name: 'sparkleDecimal',
})
export class SparkleDecimal implements PipeTransform {
  transform(value: any, args?: any): any {
    return sparkleDecimalPipe.transform(value, args);
  }
}
