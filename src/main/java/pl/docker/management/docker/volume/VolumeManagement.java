package pl.docker.management.docker.volume;

import com.github.dockerjava.api.command.CreateVolumeResponse;
import com.github.dockerjava.api.command.InspectVolumeResponse;
import com.github.dockerjava.api.command.ListVolumesResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.docker.management.docker.instance.IDockerInstance;

@Service
public class VolumeManagement implements IVolumeManagement {

    protected IDockerInstance dockerInstance;

    @Autowired
    public VolumeManagement(IDockerInstance dockerInstance) {
        this.dockerInstance = dockerInstance;
    }

    @Override
    public ListVolumesResponse getListVolume() {
        return dockerInstance.getDockerClient().listVolumesCmd().exec();
    }

    @Override
    public InspectVolumeResponse getVolumeDetails(String name) {
        return dockerInstance.getDockerClient().inspectVolumeCmd(name).exec();
    }

    @Override
    public void deleteVolume(String name) {
        dockerInstance.getDockerClient().removeVolumeCmd(name).exec();
    }

    @Override
    public CreateVolumeResponse createVolume(String name) {
        return dockerInstance.getDockerClient().createVolumeCmd().withName(name).exec();
    }
}
