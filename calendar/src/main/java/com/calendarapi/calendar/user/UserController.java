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

    // Show by ID
    @GetMapping(path = "{userId}")
    public User showUser(@PathVariable("userId") Long userId) {
        return userService.showUser(userId);
    }

    // Show by userName
    @GetMapping(path = "/userName")
    public User showUserByUserName(
            @RequestParam(required = true) String userName) {
        return userService.showByUserName(userName);
    }

    // Create
    @PostMapping
    public void addUser(@RequestBody User user) {
        userService.addNewUser(user);
    }

}
