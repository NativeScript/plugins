import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "datetimepicker", loadChildren: () => import('./plugin-demos/datetimepicker.module').then(m => m.DateTimePickerModule) },
    { path: "imagepicker", loadChildren: () => import('./plugin-demos/imagepicker.module').then(m => m.ImagePickerModule) },
    { path: "appavailability", loadChildren: () => import('./plugin-demos/appavailability.module').then(m => m.AppavailabilityModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
