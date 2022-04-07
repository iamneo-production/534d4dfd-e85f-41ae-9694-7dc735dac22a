package com.kp.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.kp.demo.entity.EventBooking;
import java.util.List;

public interface BookRepository extends JpaRepository<EventBooking, Integer> {
	
	
	List<EventBooking> findByApplicantName(String name);

}