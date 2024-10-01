import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { NgApexchartsModule } from 'ng-apexcharts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LightboxModule } from 'ngx-lightbox';

import { WidgetModule } from '../shared/widget/widget.module';
import { UIModule } from '../shared/ui/ui.module';

// Emoji Picker
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { PagesRoutingModule } from './pages-routing.module';

import { DashboardsModule } from './dashboards/dashboards.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { CryptoModule } from './crypto/crypto.module';
import { EmailModule } from './email/email.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { ContactsModule } from './contacts/contacts.module';
import { BlogModule } from "./blog/blog.module";
import { UtilityModule } from './utility/utility.module';
import { UiModule } from './ui/ui.module';
import { FormModule } from './form/form.module';
import { TablesModule } from './tables/tables.module';
import { IconsModule } from './icons/icons.module';
import { ChartModule } from './chart/chart.module';
import { CalendarComponent } from './calendar/calendar.component';
import { MapsModule } from './maps/maps.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';

import { FilemanagerComponent } from './filemanager/filemanager.component';
import { DocumentsComponent } from './documents/documents.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'; 
import { AddComponent } from './documents/add/add.component';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { SubsComponent } from './categories/subs/subs.component';
import { EditComponent } from './categories/edit/edit.component';
import { ViewDocumentComponent } from './documents/view-document/view-document.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { AddNewVersionComponent } from './documents/add-new-version/add-new-version.component';
import { HistoryComponent } from './documents/history/history.component';
import { CommentsComponent } from './documents/comments/comments.component';
import { EditDocumentComponent } from './documents/edit-document/edit-document.component';
import { SendDocumentComponent } from './documents/send-document/send-document.component';
import { AssignedDocumentsComponent } from './assigned-documents/assigned-documents.component';
import { DocumentsAuditsComponent } from './documents-audits/documents-audits.component';
import { CalendarAppComponent } from './calendar-app/calendar-app.component';
import { AddReminderComponent } from './add-reminder/add-reminder.component';
import { LoginAuditComponent } from './login-audit/login-audit.component';
import { SurveysComponent } from './surveys/surveys.component';
import { AddSurveyComponent } from './surveys/add-survey/add-survey.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';
import { RolesComponent } from './roles/roles.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { NewsComponent } from './news/news.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ForumsComponent } from './forums/forums.component';
import { SmtpComponent } from './smtp/smtp.component';
import { SettingsComponent } from './settings/settings.component';
import { AddSmtpComponent } from './smtp/add-smtp/add-smtp.component';
import { EditSmtpComponent } from './smtp/edit-smtp/edit-smtp.component';
 
export function createTranslateLoaderPagesModule(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [CalendarComponent, ChatComponent, FilemanagerComponent, DocumentsComponent, AddComponent, CategoriesComponent, AddCategoryComponent, SubsComponent, EditComponent, ViewDocumentComponent, AddNewVersionComponent, HistoryComponent, CommentsComponent, EditDocumentComponent, SendDocumentComponent, AssignedDocumentsComponent, DocumentsAuditsComponent, CalendarAppComponent, AddReminderComponent,
  LoginAuditComponent, SurveysComponent, AddSurveyComponent, UsersComponent, AddUserComponent, EditUserComponent, ResetPasswordComponent, RolesComponent, EditRoleComponent, AddRoleComponent, ChangePasswordComponent, NewsComponent, BlogsComponent, ForumsComponent, SmtpComponent, SettingsComponent, AddSmtpComponent, EditSmtpComponent],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule, 
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    DashboardsModule,
    CryptoModule,
    EcommerceModule,
    EmailModule,
    InvoicesModule,
    HttpClientModule,
    ProjectsModule,
    UIModule,
    TasksModule,
    ContactsModule,
    BlogModule,
    UtilityModule,
    UiModule,
    FormModule,
    NgSelectModule,
    TablesModule,
    IconsModule,
    ChartModule,
    WidgetModule,
    MapsModule,
    FullCalendarModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    SimplebarAngularModule,
    LightboxModule,
    PickerModule,
    NgxDocViewerModule
  ],
})
export class PagesModule { }
