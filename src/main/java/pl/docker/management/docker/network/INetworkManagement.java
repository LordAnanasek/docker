package pl.docker.management.docker.network;

import com.github.dockerjava.api.model.Network;

import java.util.List;

public interface INetworkManagement {
    Network getNetworkDetails(String networkId);
    List<Network> getNetworkList();
}
