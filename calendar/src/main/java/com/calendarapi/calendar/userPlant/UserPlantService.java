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
    public void updateUserPlant(Long userPlantId, UserPlant updatedUserPlant) {
        UserPlant foundUserPlant = userPlantRepository.findById(userPlantId)
                .orElseThrow(() -> new IllegalStateException("User Plant with ID: " + userPlantId + "does not exist"));

        if (updatedUserPlant.getName() != null && updatedUserPlant.getName().length() > 0 ) {
            foundUserPlant.setName(updatedUserPlant.getName());
        }
        if (updatedUserPlant.getScientificName() != null && updatedUserPlant.getScientificName().length() > 0 ) {
            foundUserPlant.setScientificName(updatedUserPlant.getScientificName());
        }
        if (updatedUserPlant.getNotes() != null && updatedUserPlant.getNotes().length() > 0 ) {
            foundUserPlant.setNotes(updatedUserPlant.getNotes());
        }
        if (updatedUserPlant.getLifespan() != null && updatedUserPlant.getLifespan() > 0 ) {
            foundUserPlant.setLifespan(updatedUserPlant.getLifespan());
        }
        if (updatedUserPlant.getHarvest() != null && updatedUserPlant.getLifespan() > 0 ) {
            foundUserPlant.setHarvest(updatedUserPlant.getLifespan());
        }
        if (updatedUserPlant.getSunRequirement() != null && updatedUserPlant.getSunRequirement().length() > 0 ) {
            foundUserPlant.setSunRequirement(updatedUserPlant.getSunRequirement());
        }
        if (updatedUserPlant.getImageUrl() != null ) {
            foundUserPlant.setImageUrl(updatedUserPlant.getImageUrl());
        }

        userPlantRepository.save(foundUserPlant);
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
