import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ContainerInfoDto} from "./ContainerInfoDto";
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private apiUrl = 'http://localhost:8085/api/container/list'
  // restItems: ContainerInfoDto[];
  // filterContainerInfoDto: ContainerInfoDto[];
  // networkName: string;
  //
  // @Input()
  // set networkName(networkName: string){
  //   this.networkName=networkName;
  // }
  //
  // constructor(private http: HttpClient) {
  // }
  //
  //
  // ngOnInit() {
  //   this.getRestItems();
  // }
  //
  // // Read all REST Items
  // getRestItems(): void {
  //   this.restItemsServiceGetRestItems()
  //     .subscribe(
  //       restItems => {
  //         this.restItems = restItems;
  //         console.log(this.restItems);
  //       }
  //     )
  // }
  //
  //
  // restItemsServiceGetRestItems() {
  //   return this.http
  //     .get<any[]>(this.apiUrl)
  //     .pipe(map(data => data));
  // }


}
