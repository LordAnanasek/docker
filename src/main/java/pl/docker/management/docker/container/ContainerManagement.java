package pl.docker.management.docker.container;

import com.github.dockerjava.api.command.CreateContainerResponse;
import com.github.dockerjava.api.command.InspectContainerResponse;
import com.github.dockerjava.api.model.Container;
import com.github.dockerjava.api.model.ContainerPort;
import com.github.dockerjava.api.model.Network;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.docker.management.docker.dto.ContainerInfoDto;
import pl.docker.management.docker.dto.DockerContainerCreateDto;
import pl.docker.management.docker.instance.IDockerInstance;
import pl.docker.management.docker.network.INetworkManagement;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class ContainerManagement implements IContainerManagement {
    private static final String STATUS_RUNNING = "running";


    protected IDockerInstance dockerInstance;
    protected INetworkManagement networkManagement;

    @Autowired
    public ContainerManagement(IDockerInstance dockerInstance, INetworkManagement networkManagement) {
        this.dockerInstance = dockerInstance;
        this.networkManagement = networkManagement;
    }


    @Override
    public List<ContainerInfoDto> getList() {
        List<ContainerInfoDto> containerInfoDtos = new ArrayList<>();
        List<Container> containers = dockerInstance.getDockerClient().listContainersCmd().withShowAll(true).exec();

        containers.forEach(container -> {
            String[] containerNames = container.getNames();
            for (String item : containerNames) {
                ContainerInfoDto containerInfoDto = new ContainerInfoDto();
                containerInfoDto.setId(container.getId());
                containerInfoDto.setName(item);
                containerInfoDto.setStatus(STATUS_RUNNING);
                ContainerPort[] containerPorts = container.getPorts();
                containerInfoDto.setPorts(formatPorts(containerPorts));
                containerInfoDto.setStatusRun(container.getStatus());
                containerInfoDto.setNetworkName(container.getHostConfig().getNetworkMode());
                containerInfoDtos.add(containerInfoDto);
            }
        });

        return containerInfoDtos;
    }

    public InspectContainerResponse getDetailContainer(String containerId) {
        InspectContainerResponse inspectContainerCmd = dockerInstance.getDockerClient().inspectContainerCmd(containerId).withSize(true).exec();
        return inspectContainerCmd;
    }


    private String formatPorts(ContainerPort[] containerPorts) {
        StringBuilder stringBuilder = new StringBuilder();
        for (ContainerPort containerPort : containerPorts) {
            String privatePort = Optional.ofNullable(containerPort).map(ContainerPort::getPrivatePort).orElse(0).toString();
            String publicPort = Optional.ofNullable(containerPort).map(ContainerPort::getPublicPort).orElse(0).toString();

            if (publicPort.equals(0)) {
                stringBuilder.append(privatePort + "\n");
            } else {
                stringBuilder.append(privatePort + " -> " + publicPort + "\n");
            }

        }
        return stringBuilder.toString();
    }

    @Override
    public void deleteContainer(String containerId) {
        dockerInstance.getDockerClient().removeContainerCmd(containerId).withForce(true).exec();
    }

    @Override
    public void stopContainer(String containerId) {
        dockerInstance.getDockerClient().stopContainerCmd(containerId).exec();
    }


    @Override
    public void runContainer(DockerContainerCreateDto dockerContainerCreateDto) {
        CreateContainerResponse createContainerResponse = dockerInstance.getDockerClient()
                .createContainerCmd(dockerContainerCreateDto.getNameImage())
                .withName(dockerContainerCreateDto.getContainerName())
                .exec();

        dockerInstance.getDockerClient().startContainerCmd(createContainerResponse.getId()).exec();

        Optional<String> networkId = getNetworkId(dockerContainerCreateDto);

        networkId.ifPresent(p ->{
            dockerInstance.getDockerClient().connectToNetworkCmd().withContainerId(createContainerResponse.getId()).withNetworkId(p).exec();
        });



    }

    private Optional<String> getNetworkId(DockerContainerCreateDto dockerContainerCreateDto) {
        String networkName=dockerContainerCreateDto.getNetwork();
        List<Network> networkList = networkManagement.getNetworkList();
        return networkList
                .stream()
                .filter(p->p.getName().equals(networkName))
                .map(Network::getId)
                .findFirst();
    }
}
