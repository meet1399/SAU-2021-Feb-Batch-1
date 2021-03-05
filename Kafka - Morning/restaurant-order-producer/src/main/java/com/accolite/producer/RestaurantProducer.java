package com.accolite.producer;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.accolite.domain.Restaurant;
import com.fasterxml.jackson.core.JsonProcessingException;

@Service
public class RestaurantProducer {

	@Autowired
	private KafkaTemplate<String, Restaurant> kafkaTemplate;

	public void sendRestaurantAsynchronous(Restaurant restaurant) throws JsonProcessingException {
		kafkaTemplate.send("test-topic", restaurant);
	}

}
