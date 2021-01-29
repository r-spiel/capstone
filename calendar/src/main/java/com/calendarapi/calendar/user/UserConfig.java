package com.calendarapi.calendar.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner userCommandLineRunner(UserRepository userRepository) {
        return args -> {
            User testUser1 = new User(
                     "Test User1",
                    "user1@abc.com"
            );
            User testUser2 = new User(
                    "Test User2",
                    "user2@abc.com"
            );
            User testUser3 = new User(
                    "Test User3",
                    "user3@abc.com"
            );

            userRepository.saveAll(
                    List.of(testUser1, testUser2, testUser3)
            );
        };
    }

}
