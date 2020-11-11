import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RouteGuardService } from './services/route-guard.service';

//Component imports
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AccountComponent } from './components/account/account.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { LifeQuestionsComponent } from './components/life-questions/life-questions.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LifeQuestionsAdminComponent } from './components/life-questions-admin/life-questions-admin.component';
import { MyContactsComponent } from './components/my-contacts/my-contacts.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'login-form', component: LoginFormComponent},
  {path: 'sign-up', component: SignUpFormComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'verify-email', component: VerifyEmailComponent},
  {path: 'account', component: AccountComponent, canActivate:[RouteGuardService]},
  {
    path: 'account/:name',
    component: AccountComponent,
    children: [
      {
        path: 'account-details',
        component: AccountDetailsComponent,
        canActivate:[RouteGuardService]
      },
      {
        path: 'photos',
        component: PhotosComponent,
        canActivate:[RouteGuardService]
      },
      {
        path: 'questions',
        component: LifeQuestionsComponent,
        canActivate:[RouteGuardService]
      },
      {
        path: 'my-contacts',
        component: MyContactsComponent,
        canActivate:[RouteGuardService]
      },
      {
        path: 'timeline',
        component: TimelineComponent,
        canActivate:[RouteGuardService]
      },
      {
        path: 'admin-questions',
        component: LifeQuestionsAdminComponent,
        canActivate:[RouteGuardService]
      }
    ]
  },
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path: '**', component: PageNotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
