import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatChipsModule,
  MatMenuModule,
  MatDividerModule,
  MatGridListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeWorkspaceComponent } from './home-workspace/home-workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkComponent,
    EducationComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    HomeWorkspaceComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
