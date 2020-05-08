import {Pipe, PipeTransform} from "@angular/core";
import {Post} from "../../shared/interfaces";

@Pipe({
  name: 'searchPosts'
})

export class SearchPipe implements PipeTransform{
  transform(value: Post[], search: string = ''): Post[] {
    if(!search.trim()){
      return value
    }
    return value.filter(post=>{
      return post.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}
