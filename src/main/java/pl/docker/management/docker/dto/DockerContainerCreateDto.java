package pl.docker.management.docker.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class DockerContainerCreateDto {
    private String nameImage;
    private String containerName;
    private List<ValueEnv> envList = new ArrayList<>();

}
