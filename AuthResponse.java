package com.klu.dto;

public class AuthResponse {
    private String message;

    // No-args constructor
    public AuthResponse() {
    }

    // All-args constructor
    public AuthResponse(String message) {
        this.message = message;
    }

    // Getter for 'message'
    public String getMessage() {
        return message;
    }

    // Setter for 'message'
    public void setMessage(String message) {
        this.message = message;
    }
}