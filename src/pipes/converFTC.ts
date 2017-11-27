import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertFTC'
})
export class convertFTC implements PipeTransform {

    transform(record: any): any {
        if (record == null) return record;

        record = (record * 9) / 5 + 32;
        return record;
    }
}
