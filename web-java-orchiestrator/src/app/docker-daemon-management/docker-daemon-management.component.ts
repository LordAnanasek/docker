import {Component, OnInit} from '@angular/core';
import {DockerDaemonService} from "../docker-daemon.service";

@Component({
  selector: 'app-docker-daemon-management',
  templateUrl: './docker-daemon-management.component.html',
  styleUrls: ['./docker-daemon-management.component.css']
})
export class DockerDaemonManagementComponent implements OnInit {
  host: string;

  constructor(private dockerDaemonService: DockerDaemonService) {
  }

  ngOnInit() {
  }

  setDockerDaemon() {
    this.dockerDaemonService.setDockerDeamonHost(this.host).subscribe();
  }


}
