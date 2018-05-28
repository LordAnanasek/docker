import {Component, OnInit} from '@angular/core';
import {DockerContainerCreate} from "../dto/docker/container/create/DockerContainerCreate";
import {DockerListService} from "../docker-list.service";
import {Location} from "@angular/common";
import {DockerNetworkService} from "../docker-network.service";
import {DockerNetwork} from "../dto/docker/network/DockerNetwork";

@Component({
  selector: 'app-docker-container-create',
  templateUrl: './docker-container-create.component.html',
  styleUrls: ['./docker-container-create.component.css']
})
export class DockerContainerCreateComponent implements OnInit {

  dockerContainerCreate: DockerContainerCreate = new DockerContainerCreate();
  dockerNetworkList: DockerNetwork[];


  constructor(
    private dockerListService: DockerListService,
    private dockerNetworkService: DockerNetworkService,
    private location: Location,
  ) {
  }

  ngOnInit() {
    // this.dockerContainerCreate.envList.push({value: ''});
    // this.dockerContainerCreate.portList.push({value: ''});
    this.availableNetwork();
    console.log(this.dockerNetworkList);
  }

  addEnv() {
    console.log(this.dockerContainerCreate);
    this.dockerContainerCreate.envList.push({value: ''})
  }

  addPort() {
    console.log(this.dockerContainerCreate);
    this.dockerContainerCreate.portList.push({value: ''})
  }

  deletePort() {
    this.dockerContainerCreate.portList.forEach((item, index) => {
      if(item.value == ''){
        this.dockerContainerCreate.portList.splice(index,1);
      }
    });
  }

  addContainer() {
    this.dockerListService.createAndRunContainer(this.dockerContainerCreate).subscribe();
  }

  goBack() {
    this.location.back();
  }


  availableNetwork() {
    return this.dockerNetworkService.getDockerNetworkList().subscribe(dockerNetworkList => this.dockerNetworkList = dockerNetworkList);
    // this.dockerNetworkService.
  }

  getAvailableNetwork(): DockerNetwork[] {
    return this.dockerNetworkList;
  }

}
