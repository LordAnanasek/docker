import {Component, Input, OnInit} from '@angular/core';
import {DockerListService} from "../docker-list.service";
import {DockerDetails} from "../dto/docker/details/DockerDetails";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-docker-details',
  templateUrl: './docker-container-details.component.html',
  styleUrls: ['./docker-container-details.component.css']
})
export class DockerContainerDetailsComponent implements OnInit {

//  @Input()
  dockerDetails: DockerDetails;

  getKeys(map): Array<string>{
    let array1 = new Array<string>()
    for(let k in map){

      array1.push(k);
    }
    return array1;
  }

  returnArray(map){
    console.log(map);
    return map;
  }


  disabledStopButton(): boolean{
    return !this.dockerDetails.State.Running;
  }

  constructor(
    private route: ActivatedRoute,
    private dockerListService: DockerListService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getDockerDetails();
  }

  getDockerDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dockerListService.getContainerDetails(id)
      .subscribe(dockerDetails => this.dockerDetails = dockerDetails);
  }

  deleteDockerDetails(dockerDetails: DockerDetails): void{
    this.dockerListService.deteleContainer(dockerDetails).subscribe(()=> this.goBack());
  }

  stopContainer(dockerDetails: DockerDetails): void{
    this.dockerListService.stopContainer(dockerDetails).subscribe();
  }


  goBack(): void {
    this.location.back();
  }


}
