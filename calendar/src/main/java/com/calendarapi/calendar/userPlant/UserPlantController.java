package com.calendarapi.calendar.userPlant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserPlantController {

    private final UserPlantService userPlantService;

    @Autowired
    public UserPlantController(UserPlantService userPlantService) {
        this.userPlantService = userPlantService;
    }

    // Index (admin) all UserPlants
    @GetMapping(path = "userPlants")
    public List<UserPlant> getUserPlants() {
        return userPlantService.getUserPlants();
    }

    // Index for user's plants only
    @GetMapping(path = "users/{userId}/plants")
    public List<UserPlant> getUsersUserPlants(@PathVariable("userId") Long userId) {
        List<UserPlant> onlyUsersPlants = userPlantService.getOnlyUsersPlants(userId);
        return onlyUsersPlants;
    }

    // Show
    @GetMapping(path = "userPlants/{userPlantId}")
    public UserPlant showUserPlant(@PathVariable("userPlantId") Long userPlantId) {
        return userPlantService.showUserPlant(userPlantId);
    }

    // Create
    @PostMapping(path = "users/{userId}/plants")
    public void addUserPlant(@RequestBody UserPlant userPlant, @PathVariable("userId") Long userId) {
        userPlantService.addNewUserPlant(userPlant, userId);
    }

    // Update
    @PutMapping(path = "userPlants/{userPlantId}")
    public void updateUserPlant(
            @PathVariable("userPlantId") Long userPlantId,
            @RequestBody UserPlant updatedUserPlant
//            @RequestParam(required = false) String name,
//            @RequestParam(required = false) String scientificName,
//            @RequestParam(required = false) String notes,
//            @RequestParam(required = false) Integer lifespan,
//            @RequestParam(required = false) Integer harvest,
//            @RequestParam(required = false) String sunRequirement
    ) {
        userPlantService.updateUserPlant(userPlantId, updatedUserPlant);
    }

    // Delete
    @DeleteMapping(path = "userPlants/{userPlantId}")
    public void deleteUserPlant(@PathVariable("userPlantId") Long userPlantId) {
        userPlantService.deleteUserPlant(userPlantId);
    }
}
