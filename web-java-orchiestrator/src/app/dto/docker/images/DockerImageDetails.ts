import {Config} from "./Config";


export class DockerImageDetails {
  config: Config;
  created: string;
  parent: string;
  repoTags: Array<string>
}
