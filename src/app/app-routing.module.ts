import { HomeWorkspaceComponent } from './home-workspace/home-workspace.component';
import { WorkComponent } from './work/work.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path: 'contact' , component: ContactComponent },
  {path: '' , component: HomeComponent },
  {path: 'blog' , component: HomeWorkspaceComponent },
  {path: 'education' , component: EducationComponent },
  {path: 'work' , component: WorkComponent},
  {path: 'testwork', component: HomeWorkspaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
