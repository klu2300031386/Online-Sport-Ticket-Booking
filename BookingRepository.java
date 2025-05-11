package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klu.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}