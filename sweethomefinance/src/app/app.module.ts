import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NewauthorComponent } from './auth/newauthor/newauthor.component';
import { NewstoryComponent } from './auth/newstory/newstory.component';
import { ArticleComponent } from './dashboard/articles/article/article.component';
import { LinkComponent } from './dashboard/articles/article/source/link/link.component';
import { SourceComponent } from './dashboard/articles/article/source/source.component';
import { ArticlesComponent } from './dashboard/articles/articles.component';
import { AuthorComponent } from './dashboard/authors/author/author.component';
import { AuthorsComponent } from './dashboard/authors/authors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { ImpressumComponent } from './dashboard/impressum/impressum.component';
import { MarketinfoComponent } from './dashboard/marketinfo/marketinfo.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { NewsletterComponent } from './dashboard/newsletter/newsletter.component';
import { SearchstoryComponent } from './dashboard/searchstory/searchstory.component';
import { SocialmediaComponent } from './dashboard/socialmedia/socialmedia.component';
import { CompanyComponent } from './moneydata/company/company.component';
import { CryptoComponent } from './moneydata/crypto/crypto.component';
import { ForexComponent } from './moneydata/forex/forex.component';
import { IndexComponent } from './moneydata/index/index.component';
import { MoneydataComponent } from './moneydata/moneydata.component';
import { CelebratyComponent } from './moneydata/people/celebraty/celebraty.component';
import { PeopleComponent } from './moneydata/people/people.component';
import { RichestpeopleComponent } from './moneydata/people/richestpeople/richestpeople.component';
import { SearchpeopleComponent } from './moneydata/people/searchpeople/searchpeople.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    DashboardComponent,
    MarketinfoComponent,
    AuthorsComponent,
    AuthorComponent,
    ArticlesComponent,
    ArticleComponent,
    ImpressumComponent,
    NewsletterComponent,
    SocialmediaComponent,
    SourceComponent,
    LinkComponent,
    MoneydataComponent,
    IndexComponent,
    CompanyComponent,
    PeopleComponent,
    ForexComponent,
    AuthComponent,
    NewstoryComponent,
    NewauthorComponent,
    CryptoComponent,
    SearchstoryComponent,
    SearchpeopleComponent,
    CelebratyComponent,
    RichestpeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
