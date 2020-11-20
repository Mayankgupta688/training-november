import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './component/header/header-component/header-component.component';
import { FooterComponentComponent } from './component/footer/footer-component/footer-component.component';
import { ListComponent } from './component/list/list.component';
import { DetailsComponent } from './component/details/details.component';
import { NotfoundComponent } from "./component/notfound/notfound.component";

import { ChangePipe} from "./pipes/change.pipe";

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "details/:id/:name", component: DetailsComponent},
  { path: "**", component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    ListComponent,
    DetailsComponent,
    NotfoundComponent,
    ChangePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
