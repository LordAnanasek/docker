import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DockerListComponent } from './docker-container-list/docker-container-list';
import { AppRoutingModule } from './/app-routing.module';
import { DockerContainerDetailsComponent } from './docker-container-details/docker-container-details.component';
import { DockerImageListComponent } from './docker-image-list/docker-image-list.component';
import { DockerImageDetailsComponent } from './docker-image-details/docker-image-details.component';
import { DockerNetworkDetailsComponent } from './docker-network-details/docker-network-details.component';
import { DockerContainerCreateComponent } from './docker-container-create/docker-container-create.component';
import { DockerDaemonManagementComponent } from './docker-daemon-management/docker-daemon-management.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DockerListComponent,
    DockerContainerDetailsComponent,
    DockerImageListComponent,
    DockerImageDetailsComponent,
    DockerNetworkDetailsComponent,
    DockerContainerCreateComponent,
    DockerDaemonManagementComponent
  ],
  imports: [
//    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
