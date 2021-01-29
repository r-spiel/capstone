package com.calendarapi.calendar.plant;

import com.calendarapi.calendar.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping (path = "plants")
public class PlantController {

    private final PlantService plantService;

    // use dependency injection, plantService must be instantiated, must be a bean
    @Autowired
    public PlantController(PlantService plantService) {
        this.plantService = plantService;
    }

    @GetMapping
    public List<Plant> getPlants() {
        return plantService.getPlants();
    }


//    private Long id;
//    private String name;
//    private String scientificName;
//    private String notes;
//    private Integer lifespan;
//    private Integer harvest;
//    private String sunRequirement;
}
