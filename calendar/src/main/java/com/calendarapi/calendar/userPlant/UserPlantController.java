package com.calendarapi.calendar.userPlant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "users/{userId}/plants")
public class UserPlantController {

    private final UserPlantService userPlantService;

    @Autowired
    public UserPlantController(UserPlantService userPlantService) {
        this.userPlantService = userPlantService;
    }

    // Index
    @GetMapping
    public List<UserPlant> getUserPlants() {
        return userPlantService.getUserPlants();
    }

    // Create
    @PostMapping
    public void addUserPlant(@RequestBody UserPlant userPlant) {
        userPlantService.addNewUserPlant(userPlant);
    }

}
