import { Pipe, PipeTransform } from '@angular/core';
import { work } from '../interfaces/work.interface';


@Pipe({
  name: 'WorkImage'
})
export class WorkImagePipe implements PipeTransform {

  transform(work: work): string {

    if ( work.img ) return work.img;
    else return `assets/imgs/${work.id}.png`
  }

}
