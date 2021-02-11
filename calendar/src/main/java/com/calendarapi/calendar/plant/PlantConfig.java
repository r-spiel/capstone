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
                    "full sun",
                    "https://i.ibb.co/sqn4Xqb/tomato.jpg"
            );

            Plant purpleCabbage = new Plant(
                    "Purple Cabbage",
                    "Brassica oleracea Capitata",
                    "Like other cabbage, it prefers cool weather and forms round, dense heads on top of short stalks.",
                    24,
                    12,
                    "full sun",
                    "https://i.ibb.co/Zmjs6yj/purplecabbage.jpg"
            );

            Plant carrot = new Plant(
                    "Carrot",
                    "Daucus carota",
                    "The carrot is a root vegetable. Spread 5cm apart.",
                    17,
                    21,
                    "full sun",
                    "https://i.ibb.co/Mgskv1D/carrot.jpg"
            );

            Plant broccoli = new Plant(
                    "Broccoli",
                    "Brassica oleracea",
                    "Broccoli has large flower heads known as \"crowns\" that are green to blue-green in color, grouped tightly together atop a thick stem, and surrounded by leaves. Broccoli resembles cauliflower, a different cultivar in its species. It thrives in cool weather.",
                    17,
                    16,
                    "full sun",
                    "https://i.ibb.co/G3fmfdX/broccoli.jpg"
            );

            repository.saveAll(
                    List.of(tomato, purpleCabbage, carrot, broccoli)
            );
        };
    }
}
