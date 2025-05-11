package com.klu.dto;

public class LoginRequest {
    private String email;
    private String password;

    // No-args constructor
    public LoginRequest() {
    }

    // All-args constructor
    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
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
}