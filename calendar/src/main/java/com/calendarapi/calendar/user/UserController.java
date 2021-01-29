package com.calendarapi.calendar.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "users")
public class UserController {

    private final UserService userService;

    // use dependency injection, userService must be instantiated, must be a bean
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    // Index
    @GetMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }

    // Show
    @GetMapping(path = "{userId}")
    public User showUser(@PathVariable("userId") Long userId) {
//        Long id = Long.valueOf(userId); // not neccessary
        return userService.showUser(userId);
    }

    // Create
    @PostMapping
    public void addUser(@RequestBody User user) {
        userService.addNewUser(user);
    }

}
