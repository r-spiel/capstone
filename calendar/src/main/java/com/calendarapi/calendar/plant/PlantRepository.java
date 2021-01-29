package com.calendarapi.calendar.plant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Long> {
    // This interface is responsible for data access layer

//                    new Plant(
//                        1L,
//                                "Tomato",
//                                "what is tomato in latin",
//                                "some detailed notes about growing Tomatoes",
//                                26,
//                                16,
//                                "full sun"
//
//    )

}
