package com.klu.controller;

import com.klu.dto.LoginRequest;
import com.klu.dto.SignupRequest;
import com.klu.dto.AuthResponse;
import com.klu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend requests
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public AuthResponse registerUser(@RequestBody SignupRequest signUpRequest) {
        return userService.registerUser(signUpRequest);
    }

    @PostMapping("/signin")
    public AuthResponse authenticateUser(@RequestBody LoginRequest signInRequest) {
        return userService.authenticateUser(signInRequest);
    }
}