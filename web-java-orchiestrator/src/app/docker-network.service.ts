import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {catchError, tap} from "rxjs/operators";
import {HandleErrorService} from "./handle-error.service";
import {MessageInfoService} from "./message-info.service";
import {DockerNetwork} from "./dto/docker/network/DockerNetwork"

@Injectable({
  providedIn: 'root'
})
export class DockerNetworkService {
  private detailsUrl = "http://localhost:8085/api/network";


  constructor(private http: HttpClient, private handleErrorService: HandleErrorService, private messageInfoService: MessageInfoService) {
  }

  getDockerNetworkDetails(id: string): Observable<DockerNetworkDetails> {
    const url = `${this.detailsUrl}/${id}`;
    return this.http.get<DockerNetworkDetails>(url)
      .pipe(
        tap(_ => this.messageInfoService.log(`fetched hero id=${id} `)),
        catchError(this.handleErrorService.handleError<DockerNetworkDetails>(`getHero id=${id}`))
      );
  }

  getDockerNetworkList(): Observable<DockerNetwork[]> {
    return this.http.get<DockerNetwork[]>(this.detailsUrl).pipe(tap(_ => this.messageInfoService.log('fetched network list')),
      catchError(this.handleErrorService.handleError<DockerNetwork[]>('getNetworkList'))
    );
  }

}
