package pl.docker.management.docker.container;

import com.github.dockerjava.api.command.InspectContainerResponse;
import pl.docker.management.docker.dto.ContainerInfoDto;

import java.util.List;

public interface IContainerManagement {
    List<ContainerInfoDto> getList();

    InspectContainerResponse getDetailContainer(String containerId);

    void deleteContainer(String containerId);

    void stopContainer(String containerId);
}
