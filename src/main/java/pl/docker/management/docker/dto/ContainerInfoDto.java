package pl.docker.management.docker.dto;

import lombok.Data;

@Data
public class ContainerInfoDto {
    private String id;
    private String name;
    private String status;
    private String ports;
    private String statusRun;
    private String networkName;
}
