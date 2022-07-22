import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/contents/content/content.component';
import { LicenseComponent } from './components/licenses/license/license.component';
import { NaviComponent } from './components/navi/navi.component';
import { ContentDetailComponent } from './components/contents/content-detail/content-detail.component';
import { ByPassSecurityPipe } from './pipes/by-pass-security-pipe.pipe';
import { ContentUpdateComponent } from './components/contents/content-update/content-update.component';
import { ContentAddComponent } from './components/contents/content-add/content-add.component';
import { LicenseAddComponent } from './components/licenses/license-add/license-add.component';





@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LicenseComponent,
    NaviComponent,
    ContentDetailComponent,
    ByPassSecurityPipe,
    ContentUpdateComponent,
    ContentAddComponent,
    LicenseAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
