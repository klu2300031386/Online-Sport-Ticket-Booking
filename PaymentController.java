package com.klu.controller;

import org.springframework.web.bind.annotation.*;

import com.klu.dto.PaymentRequest;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "*") // Allows requests from any frontend
public class PaymentController {

    // In-memory store for booked seats
    private Set<String> bookedSeats = ConcurrentHashMap.newKeySet();

    // POST endpoint to handle payment
    @PostMapping("/pay")
    public String handlePayment(@RequestBody PaymentRequest request) {
        for (String seat : request.getSelectedSeats()) {
            if (bookedSeats.contains(seat)) {
                return "Seat already booked: " + seat;
            }
        }

        bookedSeats.addAll(request.getSelectedSeats());
        return "Payment successful and seats booked: " + String.join(", ", request.getSelectedSeats());
    }

    // GET endpoint to fetch all booked seats
    @GetMapping("/booked")
    public Set<String> getBookedSeats() {
        return bookedSeats;
    }
}