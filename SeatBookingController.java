package com.klu.controller;



	import org.springframework.web.bind.annotation.*;
	import java.util.*;

	@RestController
	@RequestMapping("/api/seats")
	@CrossOrigin(origins = "*") // Allow React frontend access
	public class SeatBookingController {

	    private Set<String> bookedSeats = new HashSet<>(Arrays.asList("A1", "A3", "B2"));

	    @GetMapping("/booked")
	    public Set<String> getBookedSeats() {
	        return bookedSeats;
	    }

	    @PostMapping("/book")
	    public String bookSeats(@RequestBody SeatBookingRequest request) {
	        for (String seat : request.getSeats()) {
	            if (bookedSeats.contains(seat)) {
	                return "Seat already booked: " + seat;
	            }
	        }
	        bookedSeats.addAll(request.getSeats());
	        return "Seats successfully booked: " + String.join(", ", request.getSeats());
	    }

	    // DTO class for incoming seat booking data
	    static class SeatBookingRequest {
	        private List<String> seats;

	        public List<String> getSeats() {
	            return seats;
	        }

	        public void setSeats(List<String> seats) {
	            this.seats = seats;
	        }
	    }
	}