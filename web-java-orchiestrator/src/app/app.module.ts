import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DockerListComponent } from './docker-container-list/docker-container-list';
import { AppRoutingModule } from './/app-routing.module';
import { DockerDetailsComponent } from './docker-details/docker-details.component';
import { DockerImageListComponent } from './docker-image-list/docker-image-list.component';
import { DockerImageDetailsComponent } from './docker-image-details/docker-image-details.component';
import { DockerNetworkDetailsComponent } from './docker-network-details/docker-network-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DockerListComponent,
    DockerDetailsComponent,
    DockerImageListComponent,
    DockerImageDetailsComponent,
    DockerNetworkDetailsComponent
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
