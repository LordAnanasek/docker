import {ValueEnv} from "./ValueEnv";
import {Port} from "./Port";


export class DockerContainerCreate {
  nameImage: string;
  containerName: string;
  envList: Array<ValueEnv>;
  portList: Array<Port>;
  network: string;

  constructor() {
    this.envList = new Array<ValueEnv>();
    this.portList = new Array<Port>();
  }

}
