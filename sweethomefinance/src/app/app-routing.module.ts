import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NewauthorComponent } from './auth/newauthor/newauthor.component';
import { NewstoryComponent } from './auth/newstory/newstory.component';
import { ArticleComponent } from './dashboard/articles/article/article.component';
import { SourceComponent } from './dashboard/articles/article/source/source.component';
import { ArticlesComponent } from './dashboard/articles/articles.component';
import { AuthorComponent } from './dashboard/authors/author/author.component';
import { AuthorsComponent } from './dashboard/authors/authors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImpressumComponent } from './dashboard/impressum/impressum.component';
import { NewsletterComponent } from './dashboard/newsletter/newsletter.component';
import { SocialmediaComponent } from './dashboard/socialmedia/socialmedia.component';
import { MoneydataComponent } from './moneydata/moneydata.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: [
  { path: 'articles', component: ArticlesComponent, children: [
    { path: ':id', component: ArticleComponent, children: [
      { path: 'source', component: SourceComponent }
    ]}
  ]},
  { path: 'authors', component: AuthorsComponent, children: [
    { path: ':id', component:AuthorComponent }
  ]},
  { path: 'impressum', component: ImpressumComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'socialmedia', component: SocialmediaComponent },
  { path: 'moneydata', component: MoneydataComponent, children: [
    { path: 'indexes', component: MoneydataComponent },
    { path: 'companies', component: MoneydataComponent },
    { path: 'richestpeople', component: MoneydataComponent },
    { path: 'celebraties', component: MoneydataComponent },
    { path: 'exchangerates', component: MoneydataComponent },
    { path: 'crypto', component: MoneydataComponent },
  ]},
  { path: 'admin', component: AuthComponent, children: [
    { path: 'newstory', component: NewstoryComponent },
    { path: 'newauthor', component: NewauthorComponent }
  ]},]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
