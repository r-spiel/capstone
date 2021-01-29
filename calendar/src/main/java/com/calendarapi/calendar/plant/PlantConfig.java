package com.calendarapi.calendar.plant;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class PlantConfig {

    @Bean
    CommandLineRunner plantCommandLineRunner(
            PlantRepository repository) {
        return args -> {
            Plant tomato = new Plant(
                    "Tomato",
                    "Solanum lycopersicum",
                    "some detailed notes about growing Tomatoes",
                    21,
                    13,
                    "full sun"
            );

            Plant lettuce = new Plant(
                    "Lettuce",
                    "Lactuca sativa",
                    "Lettuce is a cool weather crop and high temperatures will impede germination and/or cause the plant to bolt (go to seed quickly). Some hybrid cultivars have been bred to be more heat-resistant.",
                    15,
                    5,
                    "partial sun"
            );

            repository.saveAll(
                    List.of(tomato, lettuce)
            );
        };
    }
}
