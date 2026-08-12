import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat',
  standalone: false,
})
export class TextFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 95) {
      value = value.slice(0, 95) + '...';
      return value;
    } else {
      return value;
    }
  }
}
