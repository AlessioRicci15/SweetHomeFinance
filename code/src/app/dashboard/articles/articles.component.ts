import { Component } from '@angular/core'; 
import db from '../../../assets/posts/db.json';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  articles:any;

  constructor(){
    this.articles = db[0].articles;
  }

  openArticle(object: any){
    console.log(object);
  }
}

