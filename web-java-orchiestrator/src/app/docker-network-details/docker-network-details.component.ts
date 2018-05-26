import {Component, OnInit} from '@angular/core';
import {DockerNetworkService} from "../docker-network.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Container} from "../dto/docker/network/Container";

@Component({
  selector: 'app-docker-network-details',
  templateUrl: './docker-network-details.component.html',
  styleUrls: ['./docker-network-details.component.css']
})
export class DockerNetworkDetailsComponent implements OnInit {

  dockerNetworkDetails: DockerNetworkDetails;
  containers: Container[];


  constructor(private dockerNetworkService: DockerNetworkService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.getDockerNetworkDetails();
  }

  getDockerNetworkDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dockerNetworkService.getDockerNetworkDetails(id).subscribe(dockerNetworkDetails => this.dockerNetworkDetails = dockerNetworkDetails);
  }

  getAsArray(value){
    this.containers = value;
    let result = Object.keys(this.containers).map(key => ({key: key, value: this.containers[key]}));
    return result;
  }


  goBack(): void {
    this.location.back();
  }

}
