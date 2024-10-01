import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { DefaultComponent } from './dashboards/default/default.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { DocumentsComponent } from './documents/documents.component'; 
import { AddComponent } from './documents/add/add.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { SubsComponent } from './categories/subs/subs.component';
import { EditComponent } from './categories/edit/edit.component';
import { ViewDocumentComponent } from './documents/view-document/view-document.component';
import { AddNewVersionComponent } from './documents/add-new-version/add-new-version.component';
import { HistoryComponent } from './documents/history/history.component';
import { CommentsComponent } from './documents/comments/comments.component';
import { EditDocumentComponent } from './documents/edit-document/edit-document.component';
import { SendDocumentComponent } from './documents/send-document/send-document.component';
import { AssignedDocumentsComponent } from './assigned-documents/assigned-documents.component';
import { DocumentsAuditsComponent } from './documents-audits/documents-audits.component';
import { LoginAuditComponent } from './login-audit/login-audit.component';
import { SurveysComponent } from './surveys/surveys.component';
import { AddSurveyComponent } from './surveys/add-survey/add-survey.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';
import { RolesComponent } from './roles/roles.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { ProfileComponent } from './contacts/profile/profile.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsComponent } from './news/news.component';
import { ForumsComponent } from './forums/forums.component';
import { SmtpComponent } from './smtp/smtp.component';
import { SettingsComponent } from './settings/settings.component';
import { AddSmtpComponent } from './smtp/add-smtp/add-smtp.component';
import { EditSmtpComponent } from './smtp/edit-smtp/edit-smtp.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard' },
  {
    path: "",
    component: DefaultComponent
  },

  

  { path: 'documents', component: DocumentsComponent },
  { path: 'documents/add', component: AddComponent },
  { path: 'documents/view/:id', component: ViewDocumentComponent },
  { path: 'documents/edit/:id', component: EditDocumentComponent },
  { path: 'documents/add-new-version/:id', component: AddNewVersionComponent },
  { path: 'documents/history/:id', component: HistoryComponent },
  { path: 'documents/comments/:id', component: CommentsComponent },
  { path: 'documents/send-email/:id', component: SendDocumentComponent },

  { path: 'assigned-documents', component: AssignedDocumentsComponent },
  { path: 'documents-audit', component: DocumentsAuditsComponent },
   

  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/add', component: AddCategoryComponent },
  { path: 'categories/edit/:id', component: EditComponent },

  { path: 'calendar', component: CalendarComponent },
  { path: 'login-audits', component: LoginAuditComponent },
  
  { path: 'surveys', component: SurveysComponent },
  { path: 'surveys/add', component: AddSurveyComponent },


  { path: 'blogs', component: BlogsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'forums', component: ForumsComponent }, 

  { path: 'smtp', component: SmtpComponent }, 
  { path: 'smtp/add', component: AddSmtpComponent },  
  { path: 'smtp/edit/:id', component: EditSmtpComponent },   
  { path: 'settings', component: SettingsComponent }, 
  

  
  
  
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/edit/:id', component: EditUserComponent },
  { path: 'users/reset-password/:id', component: ResetPasswordComponent },
  
  { path: 'roles', component: RolesComponent },
  { path: 'roles/add', component: AddRoleComponent },
  { path: 'roles/edit/:id', component: EditRoleComponent },
  

  { path: 'dashboard', component: DefaultComponent },
  { path: 'profile', component: ProfileComponent },
  

 
  /*{ path: 'chat', component: ChatComponent },
  { path: 'filemanager', component: FilemanagerComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: 'crypto', loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule) },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
