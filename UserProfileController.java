package com.klu.controller;

import com.klu.model.UserProfile;
import com.klu.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")  // Allow frontend to access
@RestController
@RequestMapping("/api/profile")
public class UserProfileController {

    @Autowired
    private UserProfileRepository repository;

    @PostMapping("/save")
    public UserProfile saveProfile(@RequestBody UserProfile profile) {
        return repository.save(profile);
    }
}