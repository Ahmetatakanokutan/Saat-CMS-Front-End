import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentAddComponent } from './components/contents/content-add/content-add.component';
import { ContentDetailComponent } from './components/contents/content-detail/content-detail.component';
import { ContentUpdateComponent } from './components/contents/content-update/content-update.component';
import { ContentComponent } from './components/contents/content/content.component';
import { LicenseAddComponent } from './components/licenses/license-add/license-add.component';
import { LicenseComponent } from './components/licenses/license/license.component';

const routes: Routes = [
  {path:"" ,pathMatch:"full" , component:ContentComponent},
  {path:"get_all" , component:ContentComponent},
  {path:"get_content_by_id" , component:ContentComponent},
  {path:"getVideo/:contentId" , component:ContentDetailComponent},
  {path:"update/:contentId" , component:ContentUpdateComponent},
  {path:"addNewContent" , component:ContentAddComponent},
  {path:":contentId/licences" , component:LicenseComponent},
  {path:"license/add" , component:LicenseAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
