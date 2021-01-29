package com.calendarapi.calendar.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // transforms to SQL
    Optional<User> findUserByName(String name);
    // could do @Query instead (JBQL)


}
