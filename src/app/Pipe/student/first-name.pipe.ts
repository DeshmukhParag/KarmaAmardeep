import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({name:'firstname'})

export class FirstNamePipe implements PipeTransform{

    transform(students:any,searchFirstName:any):any{

        if(searchFirstName ==null) return students

        return students.filter(function(firstname){

            return firstname.firstName.toLowerCase().indexOf(searchFirstName.toLowerCase()) > -1;
        })
    }

}

