import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertCTF'
})
export class ConverCTF implements PipeTransform {

    transform(record: any): any {
        if (record == null) return record;

        record = ((record * 9) / 5 + 32).toFixed(2);;
        
        return record;
    }
}
