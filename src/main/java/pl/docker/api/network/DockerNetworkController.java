package pl.docker.api.network;

import com.github.dockerjava.api.model.Network;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.docker.management.docker.network.INetworkManagement;

@RestController
public class DockerNetworkController implements IDockerNetworkController {

    private INetworkManagement iNetworkManagement;

    @Autowired
    public DockerNetworkController(INetworkManagement iNetworkManagement){
        this.iNetworkManagement = iNetworkManagement;
    }

    @Override    @CrossOrigin(exposedHeaders = "Access-Control-Allow-Origin")
    @RequestMapping(value = "api/network/{id}", method = RequestMethod.GET)
    public Network getNetworkDetails(@PathVariable String id) {
        return iNetworkManagement.getNetworkDetails(id);
    }
}
