package com.accolite.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.domain.Restaurant;
import com.accolite.producer.RestaurantProducer;
import com.fasterxml.jackson.core.JsonProcessingException;


@RestController
public class RestaurantController {
	
	@Autowired
	private RestaurantProducer restaurantProducer;
	
	@PostMapping("/restaurant")
	public ResponseEntity<Restaurant> postRestaurant(@RequestBody Restaurant restaurant)
			throws JsonProcessingException {

		restaurantProducer.sendRestaurantAsynchronous(restaurant);

		return ResponseEntity.status(HttpStatus.CREATED).body(restaurant);
	}
	

}
