package com.calendarapi.calendar.plant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class PlantService {

    private final PlantRepository plantRepository;

    @Autowired // dependency injection
    public PlantService(PlantRepository plantRepository) {

        this.plantRepository = plantRepository;
    }

    @GetMapping
    public List<Plant> getPlants() {
        return plantRepository.findAll();
    }

}
