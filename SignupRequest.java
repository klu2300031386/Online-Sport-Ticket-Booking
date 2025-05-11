package com.klu.dto;

public class SignupRequest {
    private String username;
    private String email;
    private String password;
    private String confirmPassword;
    private String role;

    // No-args constructor
    public SignupRequest() {
    }

    // All-args constructor
    public SignupRequest(String username, String email, String password, String confirmPassword, String role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.role = role;
    }

    // Getter for 'username'
    public String getUsername() {
        return username;
    }

    // Setter for 'username'
    public void setUsername(String username) {
        this.username = username;
    }

    // Getter for 'email'
    public String getEmail() {
        return email;
    }

    // Setter for 'email'
    public void setEmail(String email) {
        this.email = email;
    }

    // Getter for 'password'
    public String getPassword() {
        return password;
    }

    // Setter for 'password'
    public void setPassword(String password) {
        this.password = password;
    }

    // Getter for 'confirmPassword'
    public String getConfirmPassword() {
        return confirmPassword;
    }

    // Setter for 'confirmPassword'
    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    // Getter for 'role'
    public String getRole() {
        return role;
    }

    // Setter for 'role'
    public void setRole(String role) {
        this.role = role;
    }
}