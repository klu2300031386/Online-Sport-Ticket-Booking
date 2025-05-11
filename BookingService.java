package com.klu.service;

import com.klu.model.Booking;
import com.klu.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepo;

    public Booking saveBooking(Booking booking) {
        return bookingRepo.save(booking);
    }
}