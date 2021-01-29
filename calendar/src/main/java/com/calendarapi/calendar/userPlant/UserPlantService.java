package com.calendarapi.calendar.userPlant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Service
public class UserPlantService {

    private final UserPlantRepository userPlantRepository;

    @Autowired
    public UserPlantService(UserPlantRepository userPlantRepository) {
        this.userPlantRepository = userPlantRepository;
    }

    @GetMapping
    public List<UserPlant> getUserPlants() {
        return userPlantRepository.findAll();
    }

    public void addNewUserPlant(UserPlant userPlant) {
        // name must be unique
        Optional<UserPlant> userPlantByName = userPlantRepository.findUserPlantByName(userPlant.getName());
        if (userPlantByName.isPresent()) {
            throw new IllegalStateException("plant name already taken");
        }
        userPlantRepository.save(userPlant);
    }
}
