package com.calendarapi.calendar.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired // dependency injection
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public void addNewUser(User user) {
        // name must be unique
        Optional<User> userByName = userRepository.findUserByName(user.getName());
        if (userByName.isPresent()) {
            throw new IllegalStateException("username already taken");
        }
        userRepository.save(user);
    }

    public User showUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalStateException(
                        "User with ID: " + userId + " does not exist"
                ));
        return user;
    }

    public User showByUserName(String userName) {
        User user = userRepository.findUserByUserName(userName)
                .orElseThrow(() -> new IllegalStateException(
                        "User with userName: " + userName + " does not exist"
                ));
        return user;
    }
}
