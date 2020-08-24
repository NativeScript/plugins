import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home.component";
import { COMPONENTS } from "./plugin-demos";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [AppComponent, HomeComponent, ...COMPONENTS],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule],
})
export class AppModule {}
