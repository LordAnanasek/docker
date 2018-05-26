import {Config} from "./Config";


export class DockerImageDetails {
  Id: string;
  config: Config;
  created: string;
  parent: string;
  repoTags: Array<string>
}
