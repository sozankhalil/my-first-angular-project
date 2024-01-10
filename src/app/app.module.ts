import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LangButtonComponent } from './lang-button/lang-button.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardDetailsComponent } from './dashboard/dashboard-details/dashboard-details.component';
import { ExpandSidebarComponent } from './dashboard/expand-sidebar/expand-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LangButtonComponent,
    DashboardComponent,
    SidebarComponent,
    DashboardDetailsComponent,
    ExpandSidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    // provideClientHydration()
    HttpClient,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
  // return new TranslateHttpLoader(http, “./assets/i18n/”, “.json”);
}
