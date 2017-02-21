import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppPage} from './pages/app.page';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {ComponentModule} from "./__module/component/component.moudle";
import {LoginPage} from "./pages/login/login.page";
import {IndexPage} from "./pages/index/index.page";
import {ApiPage} from "./pages/index/api/api.page";
import {ProjectPage} from "./pages/index/project/project.page";
import {ProjectComp} from "./pages/index/project/project-item/project.comp";
import {ApiGroupComp} from "./pages/index/api/api-group/api-group.comp";
import {ApiItemComp} from "./pages/index/api/api-item/api-item.comp";
import {ApiEditorPage} from "./pages/api-editor/api-editor.page";
import {ApiEditorService} from "./pages/api-editor/api-editor.page.service";
import {ProjectEditorService} from "./pages/project-editor/project-editor.page.service";
import {ProjectEditorPage} from "./pages/project-editor/project-editor.page";
import {MdHttpModule} from "./__module/http/http.module";
import {UserModel} from "./models/UserModel";
import {ProjectModel} from "./models/ProjectModel";
import {ApiGroupModel} from "./models/ApiGroupModel";
import {ApiModel} from "./models/ApiModel";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [

    {path: 'login', component: LoginPage},
    {path: '', component: IndexPage},
    {
        path: 'index',
        component: IndexPage,
        children: [
            {
                path: '',
                component: ProjectPage
            },
            {
                path: 'api',
                component: ApiPage
            },
            {
                path: 'project',
                component: ProjectPage
            }
        ]
    }
];
@NgModule({
    imports: [
        BrowserModule,
        ComponentModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        MdHttpModule
    ],
    providers: [
        ApiEditorService,
        ProjectEditorService,
        UserModel,
        ProjectModel,
        ApiGroupModel,
        ApiModel
    ],
    declarations: [
        AppPage,
        LoginPage,
        IndexPage,
        ApiPage,
        ApiEditorPage,
        ApiGroupComp,
        ApiItemComp,
        ProjectPage,
        ProjectComp,
        ProjectEditorPage


    ],
    bootstrap: [AppPage]
})
export class AppModule {
}
