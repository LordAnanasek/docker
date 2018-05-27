package pl.docker.api.container;

import com.github.dockerjava.api.command.InspectContainerResponse;
import pl.docker.management.docker.dto.ContainerInfoDto;
import pl.docker.management.docker.dto.DockerContainerCreateDto;
import pl.docker.management.docker.dto.DockerDetailsDto;

import java.util.List;

public interface IDockerContainerController {
    List<ContainerInfoDto> getList();
    InspectContainerResponse getDetailContainer(String id);
    void deleteContainer(String id);
    void stopContainer(String id);
    void runContainer(DockerContainerCreateDto dockerContainerCreateDto);
}
