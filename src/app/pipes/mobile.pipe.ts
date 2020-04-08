import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'mobile'
})
export class MobilePipe implements PipeTransform {

  transform(value) {
    if (value) {
      if (isNaN(+value))
        return 'NA'
    }
    return value;
  }

}
