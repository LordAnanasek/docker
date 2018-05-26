import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DockerImagesService} from "../docker-images.service";
import {DockerImageDetails} from "../dto/docker/images/DockerImageDetails";

@Component({
  selector: 'app-docker-image-details',
  templateUrl: './docker-image-details.component.html',
  styleUrls: ['./docker-image-details.component.css']
})
export class DockerImageDetailsComponent implements OnInit {

  dockerImageDetails: DockerImageDetails;

  getKeys(map): Array<string> {
    let array1 = new Array<string>()
    for (let k in map) {

      array1.push(k);
    }
    return array1;
  }

  constructor(
    private route: ActivatedRoute,
    private dockerImageService: DockerImagesService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getDockerImagesDetails();
  }


  getDockerImagesDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dockerImageService.getDockerImageDetails(id).subscribe(dockerImageDetails => this.dockerImageDetails = dockerImageDetails);
  }

  deleteImage(dockerImageDetails: DockerImageDetails) {
    this.dockerImageService.deleteImage(dockerImageDetails).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
