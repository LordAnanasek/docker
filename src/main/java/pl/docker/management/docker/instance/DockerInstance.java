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
    }

    @Override
    public void setUpConfigDockerclient(String host) {
        this.dockerClient = DockerClientBuilder.getInstance(host).build();
    }

    @Override
    public DockerClient getDockerClient() {
        return this.dockerClient;
    }
}
