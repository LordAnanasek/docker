package pl.docker.management.docker.volume;

import com.github.dockerjava.api.command.CreateVolumeResponse;
import com.github.dockerjava.api.command.InspectVolumeResponse;
import com.github.dockerjava.api.command.ListVolumesResponse;

public interface IVolumeManagement {

    ListVolumesResponse getListVolume();

    InspectVolumeResponse getVolumeDetails(String name);

    void deleteVolume(String name);

    CreateVolumeResponse createVolume(String name);
}
