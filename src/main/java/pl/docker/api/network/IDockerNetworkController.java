package pl.docker.api.network;

import com.github.dockerjava.api.model.Network;

import java.util.List;

public interface IDockerNetworkController {
    Network getNetworkDetails(String id);
    List<Network> getNetworkList();
}
