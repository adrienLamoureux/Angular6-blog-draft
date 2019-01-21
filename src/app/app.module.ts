import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Config } from './common';
import { AppComponent } from './app.component';
import { SHARED_MODULES } from './app.common';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

@NgModule({
    declarations: [ AppComponent ],
    imports:[
        CommonModule,
        NgtUniversalModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpModule,
        HttpClientModule,
        ...SHARED_MODULES,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
