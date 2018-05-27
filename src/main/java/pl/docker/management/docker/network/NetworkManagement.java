package pl.docker.management.docker.network;

import com.github.dockerjava.api.model.Network;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.docker.management.docker.instance.IDockerInstance;

import java.util.List;

@Service
public class NetworkManagement implements INetworkManagement {

    private IDockerInstance dockerInstance;

    @Autowired
    public NetworkManagement(IDockerInstance dockerInstance){
        this.dockerInstance = dockerInstance;
    }

    @Override
    public Network getNetworkDetails(String networkId){
        Network network = dockerInstance.getDockerClient().inspectNetworkCmd().withNetworkId(networkId).exec();
        return network;
    }

    @Override
    public List<Network> getNetworkList(){
        return dockerInstance.getDockerClient().listNetworksCmd().exec();
    }

}
