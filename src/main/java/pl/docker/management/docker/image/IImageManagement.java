package pl.docker.management.docker.image;

import com.github.dockerjava.api.command.InspectImageResponse;
import com.github.dockerjava.api.model.Image;

import java.util.List;

public interface IImageManagement {

    List<Image> getAllDockerImages();

    InspectImageResponse getDockerImagesDetails(String imageId);

    void deleteImage(String imageId);
}
