import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertCTF'
})
export class ConverCTF implements PipeTransform {

    transform(record: any): any {
        if (record == null) return record;

        record = ((record - 32) * 5) / 32;
        return record;
    }
}
