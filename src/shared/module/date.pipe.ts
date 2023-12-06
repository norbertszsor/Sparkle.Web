import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

export const sparkleDatePipe = new DatePipe('en-US');

@Pipe({
  name: 'sparkleDate',
})
export class SparkleDatePipe implements PipeTransform {
  transform(value: any, format: string): string {
    const transformedValue = sparkleDatePipe.transform(value, format);
    return transformedValue || '';
  }
}
