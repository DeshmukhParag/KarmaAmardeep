import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({name:'city'})

export class CityPipe implements PipeTransform{

    transform(students:any,searchText:any):any{

        if(searchText ==null) return students

        return students.filter(function(city){

            return city.city.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        })
    }

}

