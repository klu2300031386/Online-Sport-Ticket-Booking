package com.klu.service;

import com.klu.dto.LoginRequest;
import com.klu.dto.SignupRequest;
import com.klu.dto.AuthResponse;
import com.klu.model.User;
import com.klu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public AuthResponse registerUser(SignupRequest signupRequest) {
        if (userRepository.findByEmail(signupRequest.getEmail()).isPresent()) {
            return new AuthResponse("Email already exists!");
        }
        if (!signupRequest.getPassword().equals(signupRequest.getConfirmPassword())) {
            return new AuthResponse("Passwords do not match!");
        }

        User user = new User();
        user.setUsername(signupRequest.getUsername());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setRole(signupRequest.getRole());

        userRepository.save(user);
        return new AuthResponse("User registered successfully!");
    }

    public AuthResponse authenticateUser(LoginRequest signInRequest) {
        Optional<User> user = userRepository.findByEmail(signInRequest.getEmail());

        if (user.isPresent() && passwordEncoder.matches(signInRequest.getPassword(), user.get().getPassword())) {
            return new AuthResponse("Login successful!");
        }
        return new AuthResponse("Invalid credentials!");
    }
}