// File: src/main/java/com/example/papertradingapp/controller/UserController.java
package com.example.papertradingapp.controller;

import com.example.papertradingapp.model.User;
import com.example.papertradingapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public User createUser(@RequestParam String username) {
        return userService.createUser(username);
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }
}
