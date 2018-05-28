package pl.docker.management.docker.image;

import com.github.dockerjava.api.command.InspectImageResponse;
import com.github.dockerjava.api.model.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.docker.management.docker.instance.IDockerInstance;

import java.util.List;

@Service
public class ImageManagement implements IImageManagement {

    private IDockerInstance dockerInstance;

    @Autowired
    public ImageManagement(IDockerInstance iDockerInstance) {
        this.dockerInstance = iDockerInstance;
    }

    @Override
    public List<Image> getAllDockerImages() {
        List<Image> imageList = dockerInstance.getDockerClient().listImagesCmd().withShowAll(true).exec();
        return imageList;
    }

    @Override
    public InspectImageResponse getDockerImagesDetails(String imageId) {
        InspectImageResponse inspectImageResponse = dockerInstance.getDockerClient().inspectImageCmd(imageId).exec();
        return inspectImageResponse;
    }

    @Override
    public void deleteImage(String imageId) {
        dockerInstance.getDockerClient().removeImageCmd(imageId).exec();
    }

}
