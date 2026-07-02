import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNoFormatter',
})
export class CardNoFormatterPipe implements PipeTransform {
  transform(value: string,): string {
    const last4char = value.slice(-4);
    return "**** **** ****" + last4char;
  }
}
