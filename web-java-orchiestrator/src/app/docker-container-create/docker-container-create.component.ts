import { Component, OnInit } from '@angular/core';
import {DockerContainerCreate} from "../dto/docker/container/create/DockerContainerCreate";
import {DockerListService} from "../docker-list.service";
import {Location} from "@angular/common";
import {DockerNetworkService} from "../docker-network.service";

@Component({
  selector: 'app-docker-container-create',
  templateUrl: './docker-container-create.component.html',
  styleUrls: ['./docker-container-create.component.css']
})
export class DockerContainerCreateComponent implements OnInit {

  dockerContainerCreate :DockerContainerCreate = new DockerContainerCreate();

  constructor(
    private dockerListService :DockerListService,
    private dockerNetworkService :DockerNetworkService,
    private location : Location,
  ) { }

  ngOnInit() {
   // this.dockerContainerCreate.envList.push({value: ''});
   // this.dockerContainerCreate.portList.push({value: ''});
  }

  addEnv() {
    console.log(this.dockerContainerCreate);
    this.dockerContainerCreate.envList.push({value: ''})
  }

  addPort() {
    console.log(this.dockerContainerCreate);
    this.dockerContainerCreate.portList.push({value: ''})
  }

  addContainer(){
    console.log(this.dockerContainerCreate);
    this.dockerListService.runContainer(this.dockerContainerCreate).subscribe();
  }

  goBack(){
    this.location.back();
  }

  availableNetwork():void {
   // this.dockerNetworkService.

  }

}
