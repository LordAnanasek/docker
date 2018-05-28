package pl.docker.management.docker.instance;

import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.core.DockerClientBuilder;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class DockerInstance implements IDockerInstance {
    private DockerClient dockerClient;

    @PostConstruct
    void defaultSetup(){
        this.dockerClient = DockerClientBuilder.getInstance().build();
        //setUpConfigDockerclient();
    }

    @Override
    public void setUpConfigDockerclient() {
        this.dockerClient = DockerClientBuilder.getInstance("tcp://172.20.241.121:2375").build();
    }

    @Override
    public DockerClient getDockerClient() {
        return this.dockerClient;
    }
}
