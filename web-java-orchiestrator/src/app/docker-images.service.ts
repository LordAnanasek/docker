import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {DockerImagesList} from "./dto/docker/images/DockerImagesList";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {DockerImageDetails} from "./dto/docker/images/DockerImageDetails";
import {HandleErrorService} from "./handle-error.service";
import {MessageInfoService} from "./message-info.service";

@Injectable({
  providedIn: 'root'
})
export class DockerImagesService {
  private apiUrl = 'http://localhost:8085/api/images/list';
  private detailsUrl = 'http://localhost:8085/api/images/';
  dockerImagesList :DockerImagesList[];


  constructor(private http :HttpClient, private handleErrorService :HandleErrorService, private messageInfoService :MessageInfoService) { }


  getAllDockerImages() : Observable<DockerImagesList[]> {
    return this.http.get<DockerImagesList[]>(this.apiUrl);
  }


  getDockerImageDetails(id: string) : Observable<DockerImageDetails>{
    const url = `${this.detailsUrl}/${id}`;
    return this.http.get<DockerImageDetails>(url)
      .pipe(
        tap(_  => this.messageInfoService.log(`fetched hero id=${id} `)),
        catchError(this.handleErrorService.handleError<DockerImageDetails>(`getHero id=${id}`))
      );
  }

}
