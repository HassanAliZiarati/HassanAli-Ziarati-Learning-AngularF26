import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceLabel',
})
export class PriceLabelPipe implements PipeTransform {
  transform(price: unknown, label: string = 'Price'): string {
    // Check the formatted price
    if (typeof price !== 'string' || price.trim() === '') {
      return 'Price unavailable';
    }

    return label + ': ' + price;
  }
}
