package pl.docker.api.container;

import com.github.dockerjava.api.command.InspectContainerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.docker.management.docker.container.IContainerManagement;
import pl.docker.management.docker.dto.ContainerInfoDto;
import pl.docker.management.docker.dto.DockerDetailsDto;

import java.util.List;

@RestController
public class DockerContainerController implements IDockerContainerController {

    @Autowired
    IContainerManagement dockerManagement;

    @CrossOrigin(exposedHeaders = "Access-Control-Allow-Origin")
    @RequestMapping(value = "api/container/list", method = RequestMethod.GET)
    public List<ContainerInfoDto> getList() {
        return dockerManagement.getList();
    }

    @CrossOrigin(exposedHeaders = "Access-Control-Allow-Origin")
    @RequestMapping(value = "api/container/{id}", method = RequestMethod.GET)
    public InspectContainerResponse getDetailContainer(@PathVariable String id) {
        return dockerManagement.getDetailContainer(id);
    }


}
