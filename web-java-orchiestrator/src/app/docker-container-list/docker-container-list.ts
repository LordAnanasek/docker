import { Component, OnInit } from '@angular/core';
import {DockerListService} from "../docker-list.service";
import {ContainerInfoDto} from "../ContainerInfoDto";

@Component({
  selector: 'app-docker-list',
  templateUrl: './docker-container-list.html',
  styleUrls: ['./docker-container-list.component.css']
})
export class DockerListComponent implements OnInit {

  containterInfoDto : ContainerInfoDto[];

  constructor(private dockerListService : DockerListService) { }

  ngOnInit() {
    this.getContainerInfoDto();
  }

  getContainerInfoDto(): void{
    this.dockerListService.getContainerInfoDto().subscribe(containterInfoDto => this.containterInfoDto = containterInfoDto);

  }

}
