package com.calendarapi.calendar.userPlant;

import com.calendarapi.calendar.user.User;
import com.calendarapi.calendar.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserPlantService {

    private final UserPlantRepository userPlantRepository;
    private final UserService userService;

    @Autowired
    public UserPlantService(UserPlantRepository userPlantRepository, UserService userService) {
        this.userPlantRepository = userPlantRepository;
        this.userService = userService;
    }

    // Index admin get all user plants
    @GetMapping
    public List<UserPlant> getUserPlants() {
        return userPlantRepository.findAll();
    }

    // Index by UserID
    public List<UserPlant> getOnlyUsersPlants(Long userId) {
        User user = userService.showUser(userId);
        List<UserPlant> userPlantList = user.getUserPlantList();
        return userPlantList;
    }


    // Show - by userPlant ID
    public UserPlant showUserPlant(Long userPlantId) {
        UserPlant userPlant = userPlantRepository.findById(userPlantId)
                .orElseThrow(() -> new IllegalStateException("User's Plant with ID: " + userPlantId + " does not exist")
                );
        return userPlant;
    }

    // Create
    public void addNewUserPlant(UserPlant userPlant, Long userId) {
        User user = userService.showUser(userId);

        userPlant.setUser(user);
        userPlantRepository.save(userPlant);
    }

    // Update
    @Transactional
    public void updateUserPlant(Long userPlantId,
                                String name,
                                String scientificName,
                                String notes,
                                Integer lifespan,
                                Integer harvest,
                                String sunRequirement) {
        UserPlant userPlant = userPlantRepository.findById(userPlantId)
                .orElseThrow(() -> new IllegalStateException("User Plant with ID: " + userPlantId + "does not exist"));

        if (name != null && name.length() > 0 ) {
            userPlant.setName(name);
        }
        if (scientificName != null && scientificName.length() > 0 ) {
            userPlant.setScientificName(scientificName);
        }
        if (notes != null && notes.length() > 0 ) {
            userPlant.setNotes(notes);
        }
        if (lifespan != null && lifespan > 0 ) {
            userPlant.setLifespan(lifespan);
        }
        if (harvest != null && harvest > 0 ) {
            userPlant.setHarvest(harvest);
        }
        if (sunRequirement != null && sunRequirement.length() > 0 ) {
            userPlant.setSunRequirement(sunRequirement);
        }

        userPlantRepository.save(userPlant);
    }

    public void deleteUserPlant(Long userPlantId) {
        //TODO: dependent delete of events that belong to this plant
        boolean exists = userPlantRepository.existsById(userPlantId);
        if (!exists) {
            throw new IllegalStateException("User Plant with ID: " + userPlantId + " does not exist");
        }
        userPlantRepository.deleteById(userPlantId);
    }
}
