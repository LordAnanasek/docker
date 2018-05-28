package pl.docker.api.image;

import com.github.dockerjava.api.command.InspectImageResponse;
import com.github.dockerjava.api.model.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pl.docker.management.docker.image.IImageManagement;

import java.util.List;

@RestController
public class DockerImageController implements IDockerImageController {

    private IImageManagement dockerImageManagement;

    @Autowired
    public DockerImageController(IImageManagement dockerImageManagement) {
        this.dockerImageManagement = dockerImageManagement;
    }

    @Override
    public List<Image> getList() {
        return dockerImageManagement.getAllDockerImages();
    }

    @Override
    public InspectImageResponse getDetailContainer(@PathVariable String id) {
        return dockerImageManagement.getDockerImagesDetails(id);
    }

    @Override
    public void deleteImage(@PathVariable String id) {
        dockerImageManagement.deleteImage(id);
    }



}
