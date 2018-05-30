package pl.docker.api.daemon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnResource;
import org.springframework.web.bind.annotation.*;
import pl.docker.management.docker.instance.IDockerInstance;

@RestController
public class DaemonDockerController implements IDaemonDockerController{

    protected IDockerInstance dockerInstance;

    @Autowired
    public DaemonDockerController(IDockerInstance dockerInstance){
        this.dockerInstance=dockerInstance;
    }

    @Override
    @CrossOrigin
    @RequestMapping(value = "/api/instance", method = RequestMethod.POST)
    public void setRemoteDockerDaemonAddress(@RequestBody String body){
        dockerInstance.setUpConfigDockerclient(body);
    }
}
