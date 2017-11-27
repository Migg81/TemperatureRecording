import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertFTC'
})
export class convertFTC implements PipeTransform {

    transform(record: any): any {
        if (record == null) return record;

        record = (((record - 32) * 5) / 32).toFixed(2);;

        return record;
    }
}
