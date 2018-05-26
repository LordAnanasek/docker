package pl.docker.management.docker.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class DockerDetailsDto {
    private String id;
    private String created;
    private String driver;
    private String image;
    private List<String> envList = new ArrayList<>();
}
