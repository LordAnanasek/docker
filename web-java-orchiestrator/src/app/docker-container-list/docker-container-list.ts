import {Component, OnInit} from '@angular/core';
import {DockerListService} from "../docker-list.service";
import {ContainerInfoDto} from "../ContainerInfoDto";
import {Location} from "@angular/common";
import {EnumModule} from "../constants/EnumModule"

@Component({
  selector: 'app-docker-list',
  templateUrl: './docker-container-list.html',
  styleUrls: ['./docker-container-list.component.css']
})
export class DockerListComponent implements OnInit {

  containterInfoDtoArray: ContainerInfoDto[];
  containerInfoDto: ContainerInfoDto;


  constructor(private dockerListService: DockerListService,
              private location: Location
  ) {
  }

  ngOnInit() {
    this.getContainerInfoDto();
  }

  getContainerInfoDto(): void {
    this.dockerListService.getContainerInfoDto().subscribe(containterInfoDto => this.containterInfoDtoArray = containterInfoDto);

  }

  goBack(): void {
    this.location.back();
  }

  getStatusForBadges(container: ContainerInfoDto): string {
    if (container.statusRun.includes(EnumModule.StateEnum.UP)) {
      return "Running"
    } else if (container.statusRun.includes(EnumModule.StateEnum.EXITED)){
      return 'Exited';
    }
    return '';
  }

  getKindBagde(container: ContainerInfoDto): string {
    if (container.statusRun.includes(EnumModule.StateEnum.UP)) {
      return "success"
    } else if (container.statusRun.includes(EnumModule.StateEnum.EXITED)){
      return 'danger';
    }
    return 'warning';
  }

}
