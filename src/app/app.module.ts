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
import {UserLocalStorage} from "./utils/UserLocalStorage";
import {LoginPageService} from "./pages/login/login.page.service";
import {ProjectNewModalService} from "./pages/project-new-modal/project-new.modal.service";
import {ProjectNewModal} from "./pages/project-new-modal/project-new.modal";
import {ProjectPageService} from "./pages/index/project/project.service";
import {ApiPageService} from "./pages/index/api/api.page.service";
import {ApiGroupService} from "./pages/index/api/api-group/api-group.service";
import {TestPage} from "./pages/index/test/test.page";
import {TestPageService} from "./pages/index/test/test.page.service";
import {ApiNewComp} from "./pages/index/api/api-new/api-new.comp";
import {TestTaskComp} from "./pages/index/test/test-task/test-task.comp";
import {TestTaskNewComp} from "./pages/index/test/test-task/test-task-new/test-task-new.comp";
import {ApiResponseComp} from "./pages/api-editor/api-response/api-response.com";
import {ApiParamComp} from "./pages/api-editor/api-param/api-param.com";
import {ApiParamItemComp} from "./pages/api-editor/api-param/api-param-item/api-param-item.com";
import {TestTaskNewParamComp} from "./pages/index/test/test-task/test-task-new/test-task-new-param/test-task-new-param.comp";
import {TestTaskService} from "./pages/index/test/test-task/test-task.service";
import {TestModel} from "./models/TestModel";
import {TestTaskItemComp} from "./pages/index/test/test-task/test-task-item/test-task-item.comp";
import {TestResultComp} from "./pages/index/test/test-result/test-result.com";
import {TestResultItemComp} from "./pages/index/test/test-result/test-result-item/test-result-item.com";
import {TestResultService} from "./pages/index/test/test-result/test-result.service";
import {TestReportModel} from "./models/TestReportModel";

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
                path: 'api/:id',
                component: ApiPage
            },
            {
                path: 'project',
                component: ProjectPage
            },
            {
                path: 'test/:i',
                component: TestPage
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
        UserLocalStorage,
        ApiEditorService,
        ProjectEditorService,
        UserModel,
        ProjectModel,
        ApiGroupModel,
        ApiModel,
        TestModel,
        TestReportModel,
        UserLocalStorage,
        LoginPageService,
        ProjectNewModalService,
        ProjectPageService,
        ApiPageService,
        ApiGroupService,
        TestPageService,
        TestTaskService,
        TestResultService
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
        ProjectEditorPage,
        ProjectNewModal,
        TestPage,
        ApiNewComp,
        TestTaskComp,
        TestTaskNewComp,
        ApiParamComp,
        ApiResponseComp,
        ApiParamItemComp,
        TestTaskNewParamComp,
        TestTaskItemComp,
        TestResultComp,
        TestResultItemComp
    ],
    bootstrap: [AppPage]
})
export class AppModule {
}
