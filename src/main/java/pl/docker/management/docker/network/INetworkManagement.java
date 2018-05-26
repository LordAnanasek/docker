package pl.docker.management.docker.network;

import com.github.dockerjava.api.model.Network;

public interface INetworkManagement {
    Network getNetworkDetails(String networkId);
}
