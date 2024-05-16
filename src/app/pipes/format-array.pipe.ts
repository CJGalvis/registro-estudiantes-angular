import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatArray',
})
export class FormatArrayPipe implements PipeTransform {
  transform(value: Array<any>): string {
    const str = value.reduce(
      (a, currentValue) => [...a, currentValue.name],
      []
    );

    console.log(str);
    return str;
  }
}
