import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullpageModule } from './layouts/fullpage/fullpage.module';
import { FullpageadminModule } from './layouts/fullpageadmin/fullpageadmin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { FullpageadminclearModule } from './layouts/fullpageadminclear/fullpageadminclear.module';
import { JwtInterceptor } from './modules/common/interceptor/jwt.interceptor';
import { AdminAuthorizeGuard } from './modules/admin/common/guard/adminAuthorizeGuard';




registerLocaleData(localePl);
@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        DefaultModule,
        FullpageModule,
        FullpageadminModule,
        BrowserAnimationsModule,
        FullpageadminclearModule], providers: [
        { provide: LOCALE_ID, useValue: 'pl-PL' },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        AdminAuthorizeGuard,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {}
