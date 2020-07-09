import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, long :number = 5, suf: string ='...' ):  any {
    return value.substring(0,long)+(value.length > long ? suf : '' )  ;
  }
  

}
