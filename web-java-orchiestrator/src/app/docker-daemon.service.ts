import { Injectable } from '@angular/core';
import {DockerContainerCreate} from "./dto/docker/container/create/DockerContainerCreate";
import {catchError, tap} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {MessageInfoService} from "./message-info.service";
import {HandleErrorService} from "./handle-error.service";

@Injectable({
  providedIn: 'root'
})
export class DockerDaemonService {
  private url : string = 'http://localhost:8085/api/instance';


  constructor(private http: HttpClient,
              private messageInfoService : MessageInfoService,
              private handleErrorService: HandleErrorService
  ) { }

  setDockerDeamonHost(host :string): Observable<any>{
    return this.http.post(this.url, host).pipe(
      tap(_ => this.messageInfoService.log('set daemon')),
      catchError(this.handleErrorService.handleError<string>('setDockerDaemonHost'))
    );
  }
}
