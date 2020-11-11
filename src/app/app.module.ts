import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import * as Sentry from "@sentry/angular";

//Component imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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



// Sentry.init({
//   dsn: "https://446d9bddccfa4f2fb5eabf20ede02b16@o463876.ingest.sentry.io/5469439"
// });


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignUpFormComponent,
    LoginFormComponent,
    PageNotFoundComponent,
    AccountDetailsComponent,
    LandingPageComponent,
    PhotosComponent,
    VerifyEmailComponent,
    AccountComponent,
    LogoutComponent,
    FeaturesComponent,
    AboutComponent,
    LifeQuestionsComponent,
    TimelineComponent,
    LifeQuestionsAdminComponent,
    MyContactsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    // MatFormFieldModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
