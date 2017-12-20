import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;


    return items.filter(item =>{
        for (let key in item ) {
          if((""+item[key]).toUpperCase().includes(searchText.toUpperCase())){
             return true;
          }
        }
        return false;
     });


/*searchText = searchText.toLowerCase();
return items.filter( it => {
      return it = searchText;
    });*/
   }
}