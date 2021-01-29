package com.calendarapi.calendar.userPlant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserPlantRepository extends JpaRepository<UserPlant, Long> {

    Optional<UserPlant> findUserPlantByName(String name);
}
