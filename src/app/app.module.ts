import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
    MatButtonModule,
    MatCardModule,
    MatLineModule,
    MatListModule
} from '@angular/material'
import { CtaComponent } from './cta/cta.component'
import { ThingsListComponent } from './things-list/things-list.component'
import { ThingsListItemComponent } from './things-list-item/things-list-item.component'
import { AddThingComponent } from './add-thing/add-thing.component'
import { EditThingComponent } from './edit-thing/edit-thing.component'
import { SettingsComponent } from './screens/settings/settings.component'
import { EditComponent } from './screens/edit/edit.component'
import { AddComponent } from './screens/add/add.component'
import { DashboardComponent } from './screens/dashboard/dashboard.component'

@NgModule({
    declarations: [
        AppComponent,
        CtaComponent,
        ThingsListComponent,
        ThingsListItemComponent,
        AddThingComponent,
        EditThingComponent,
        SettingsComponent,
        EditComponent,
        AddComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatLineModule,
        MatListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
