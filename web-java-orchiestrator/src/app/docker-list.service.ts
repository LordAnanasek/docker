import {Injectable} from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import {ContainerInfoDto} from "./ContainerInfoDto";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {DockerDetails} from "./dto/docker/details/DockerDetails";
import {of} from "rxjs/internal/observable/of";


@Injectable({
  providedIn: 'root'
})
export class DockerListService {
  private apiUrl = 'http://localhost:8085/api/container/list';
  private detailsUrl = 'http://localhost:8085/api/container/';

  constructor(private http: HttpClient) {
  }

  getContainerInfoDto() : Observable<ContainerInfoDto[]> {
    return this.http.get<ContainerInfoDto[]>(this.apiUrl);
  }

  getContainerDetails(id: string) : Observable<DockerDetails>{
    const url = `${this.detailsUrl}/${id}`;
    return this.http.get<DockerDetails>(url)
      .pipe(
        tap(_  => this.log(`fetched hero id=${id} `)),
        catchError(this.handleError<DockerDetails>(`getHero id=${id}`))
    );
  }






  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('HeroService: ' + message);
  }


}

