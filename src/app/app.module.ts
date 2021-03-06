import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CovalentDynamicFormsModule} from "@covalent/dynamic-forms";
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import {
  CovalentCommonModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentFileModule,
  CovalentJsonFormatterModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule,
  CovalentNotificationsModule,
  CovalentSearchModule,
  CovalentStepsModule,
  CovalentTabSelectModule
} from "@covalent/core";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentHttpModule} from "@covalent/http";
import {ErrorsHandler} from "./error-handler";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatRadioModule} from "@angular/material/radio";
import {ResponseInterceptor} from "./services/response-interceptor";
import {MessageService} from "./services/message.service";
import {GrapheditorMainComponent} from "./components/conformance-main/grapheditor-main.component";
import {GraphDefinitionDetailComponent} from "./components/graph-definition-detail/graph-definition-detail.component";
import {GraphDefinitionLinkComponent} from "./components/graph-definition-link/graph-definition-link.component";
import {GraphDefinitionComponent} from "./components/graph-definition/graph-definition.component";
import {MatChipsModule} from "@angular/material/chips";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ResourceDialogComponent} from "./dialog/resource-dialog/resource-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {NgxGraphModule} from "@swimlane/ngx-graph";
import {TooltipModule} from "ngx-tooltip";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {ObservationDefinitionSummaryComponent} from "./components/observation-definition-summary/observation-definition-summary.component";
import { IntroductionComponent } from './components/introduction/introduction.component';
import {MatTabsModule} from "@angular/material/tabs";
import { NodeDescriptionComponent } from './dialog/node-description/node-description.component';
import { EdgeDescriptionComponent } from './dialog/edge-description/edge-description.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {QuestionnaireComponent} from "./components/questionnaire-detail/questionnaire.component";
import {QuestionnaireItemComponent} from "./components/questionnaire-item/questionnaire-item.component";
import {QuestionnaireItemOptionComponent} from "./components/questionnaire-item-option/questionnaire-item-option.component";
import {QuestionnaireSummaryComponent} from "./components/questionnaire/questionnaire-summary.component";

@NgModule({
  declarations: [
    AppComponent,
      GrapheditorMainComponent,
      GraphDefinitionDetailComponent,
      GraphDefinitionLinkComponent,
      GraphDefinitionComponent,
      ResourceDialogComponent,
      ObservationDefinitionSummaryComponent,
      IntroductionComponent,
      NodeDescriptionComponent,
      EdgeDescriptionComponent,
      QuestionnaireComponent,
      QuestionnaireSummaryComponent,
      QuestionnaireItemComponent,
      QuestionnaireItemOptionComponent
  ],
    entryComponents: [
        ResourceDialogComponent,
        NodeDescriptionComponent,
        EdgeDescriptionComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        DragDropModule,

        FlexLayoutModule,


        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        MatRadioModule,
        MatSelectModule,
        MatChipsModule,
        MatSortModule,
        MatToolbarModule,
        MatDialogModule,

        CovalentLayoutModule,
        CovalentStepsModule,
        // (optional) Additional Covalent Modules imports
        CovalentHttpModule.forRoot(),
        CovalentHighlightModule,
        CovalentMarkdownModule,
        CovalentDynamicFormsModule,
        CovalentBaseEchartsModule,
        CovalentTabSelectModule,
        CovalentCommonModule,
        CovalentFileModule,

        CovalentExpansionPanelModule,
        CovalentJsonFormatterModule,
        CovalentMediaModule,
        CovalentNotificationsModule,
        CovalentMenuModule,
        CovalentMessageModule,
        CovalentDialogsModule,
        CovalentLoadingModule,

        CovalentBaseEchartsModule,
        CovalentBarEchartsModule,
        CovalentTooltipEchartsModule,
        CovalentSearchModule,

        NgxGraphModule,
        NgxChartsModule,
        TooltipModule,
        MatTabsModule

    ],
  providers: [
    MessageService,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
