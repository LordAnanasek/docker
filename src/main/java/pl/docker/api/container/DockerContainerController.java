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

    private static final String ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";

    @Autowired
    IContainerManagement dockerManagement;

    @CrossOrigin(exposedHeaders = ACCESS_CONTROL_ALLOW_ORIGIN)
    @RequestMapping(value = "api/container/list", method = RequestMethod.GET)
    public List<ContainerInfoDto> getList() {
        return dockerManagement.getList();
    }

    @CrossOrigin(exposedHeaders = ACCESS_CONTROL_ALLOW_ORIGIN)
    @RequestMapping(value = "api/container/{id}", method = RequestMethod.GET)
    public InspectContainerResponse getDetailContainer(@PathVariable String id) {
        return dockerManagement.getDetailContainer(id);
    }

    @CrossOrigin(exposedHeaders = ACCESS_CONTROL_ALLOW_ORIGIN)
    @RequestMapping(value= "api/container/{id}", method = RequestMethod.DELETE)
    public void deleteContainer(@PathVariable String id){
        dockerManagement.deleteContainer(id);
    }
}
