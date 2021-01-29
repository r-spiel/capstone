package com.calendarapi.calendar.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

//                    new User(
//                        1L,
//                                "SampleUser",
//                                "sample@xyz.com"
//    )

}
