/*****
 * Modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxUiLoaderModule } from "ngx-ui-loader";

/*****
* Components
*/
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { SingleListComponent } from './single-list/single-list.component';


/*****
 * Routing
 */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListComponent,
    SearchComponent,
    SingleListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
