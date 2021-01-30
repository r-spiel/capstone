package com.calendarapi.calendar.userPlant;

import com.calendarapi.calendar.user.User;
import com.calendarapi.calendar.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
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

    @GetMapping
    public List<UserPlant> getUserPlants() {
        return userPlantRepository.findAll();
    }

    public void addNewUserPlant(UserPlant userPlant, Long userId) {
        // name must be unique
        Optional<UserPlant> userPlantByName = userPlantRepository.findUserPlantByName(userPlant.getName());
        if (userPlantByName.isPresent()) {
            throw new IllegalStateException("plant name already taken");
        }
        User user = userService.showUser(userId);
        userPlant.setUser(user);
        userPlantRepository.save(userPlant);
    }
}
