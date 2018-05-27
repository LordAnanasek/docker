package pl.docker.management.docker.container;

import com.github.dockerjava.api.command.InspectContainerResponse;
import com.github.dockerjava.api.model.Container;
import com.github.dockerjava.api.model.ContainerPort;
import org.springframework.stereotype.Service;
import pl.docker.management.docker.dto.ContainerInfoDto;
import pl.docker.management.docker.dto.DockerContainerCreateDto;
import pl.docker.management.docker.dto.DockerDetailsDto;
import pl.docker.management.docker.instance.IDockerInstance;

import java.util.*;


@Service
public class ContainerManagement implements IContainerManagement {
    private static final String STATUS_RUNNING = "running";


    protected IDockerInstance iDockerInstance;

    public ContainerManagement(IDockerInstance dockerInstance){
        iDockerInstance=dockerInstance;
    }


    @Override
    public List<ContainerInfoDto> getList() {
        List<ContainerInfoDto> containerInfoDtos = new ArrayList<>();
        List<Container> containers = iDockerInstance.getDockerClient().listContainersCmd().withShowAll(true).exec();

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

    public InspectContainerResponse getDetailContainer(String containerId){
        InspectContainerResponse inspectContainerCmd = iDockerInstance.getDockerClient().inspectContainerCmd(containerId).withSize(true).exec();
        return  inspectContainerCmd;
    }



    private String formatPorts(ContainerPort[] containerPorts){
        StringBuilder stringBuilder = new StringBuilder();
        for (ContainerPort containerPort: containerPorts) {
            String privatePort = Optional.ofNullable(containerPort).map(ContainerPort::getPrivatePort).orElse(0).toString();
            String publicPort = Optional.ofNullable(containerPort).map(ContainerPort::getPublicPort).orElse(0).toString();

            if(publicPort.equals(0)){
                stringBuilder.append(privatePort+"\n");
            }else{
                stringBuilder.append(privatePort+" -> "+publicPort+"\n");
            }

        }
        return stringBuilder.toString();
    }

    @Override
    public void deleteContainer(String containerId){
        iDockerInstance.getDockerClient().removeContainerCmd(containerId).withForce(true).exec();
    }

    @Override
    public void stopContainer(String containerId){
        iDockerInstance.getDockerClient().stopContainerCmd(containerId).exec();
    }

//    @Override
//    public void test(){
//        iDockerInstance.getDockerClient().createContainerCmd("busybox").withEnv
//    }

    @Override
    public void runContainer(DockerContainerCreateDto dockerContainerCreateDto){
        iDockerInstance.getDockerClient()
                .createContainerCmd(dockerContainerCreateDto.getNameImage())
                .withName(dockerContainerCreateDto.getContainerName())
                .exec();
    }
}
