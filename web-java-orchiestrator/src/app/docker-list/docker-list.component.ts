import { Component, OnInit } from '@angular/core';
import {DockerListService} from "../docker-list.service";
import {ContainerInfoDto} from "../ContainerInfoDto";

@Component({
  selector: 'app-docker-list',
  templateUrl: './docker-list.component.html',
  styleUrls: ['./docker-list.component.css']
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
