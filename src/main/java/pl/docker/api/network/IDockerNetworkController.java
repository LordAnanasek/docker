package pl.docker.api.network;

import com.github.dockerjava.api.model.Network;

public interface IDockerNetworkController {
    Network getNetworkDetails(String id);
}
