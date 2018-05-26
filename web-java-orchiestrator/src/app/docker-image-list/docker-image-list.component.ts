import { Component, OnInit } from '@angular/core';
import {DockerImagesService} from "../docker-images.service";
import {DockerImagesList} from "../dto/docker/images/DockerImagesList";

@Component({
  selector: 'app-docker-image-list',
  templateUrl: './docker-image-list.component.html',
  styleUrls: ['./docker-image-list.component.css']
})
export class DockerImageListComponent implements OnInit {

  dockerImagesList: DockerImagesList[];


  constructor(private dockerImageService :DockerImagesService) { }

  ngOnInit() {
    this.getDockerListImages();
  }

  getDockerListImages(): void{
    this.dockerImageService.getAllDockerImages().subscribe(dockerImagesList => this.dockerImagesList = dockerImagesList);
   //this.dockerImagesList = this.dockerImageService.getAllDockerImagesFormat();
  }

}
