package com.klu.dto;

import jakarta.validation.constraints.Email;

public class RegisterRequest {
    @NotBlank
    private String username;
    @Email
    private String email;
    @NotBlank
    private String password;
    @NotBlank
    private String confirmPassword;
    private String role;
    // getters and setters
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}