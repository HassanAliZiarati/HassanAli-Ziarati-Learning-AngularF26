import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryLabel',
})
export class CategoryLabelPipe implements PipeTransform {
  private labels: Record<string, string> = {
    motorcycle: 'Motorcycle',
  };

  transform(category: unknown): string {
    // Check the category
    if (typeof category !== 'string' || category.trim() === '') {
      return 'Unknown category';
    }

    return this.labels[category] ?? category;
  }
}
