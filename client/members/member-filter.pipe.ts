import {  PipeTransform, Pipe } from '@angular/core';
import { IMember } from './member';

@Pipe({
    name: 'memberFilter'
})
export class MemberFilterPipe implements PipeTransform {

    transform(value: IMember[], args: string[]): IMember[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((member: IMember) =>
            member.memberName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}