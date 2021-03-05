package com.accolite.deserializer;

import org.apache.kafka.common.serialization.Deserializer;


import com.accolite.domain.Restaurant;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;

public class RestaurantDeserializer implements Deserializer<Restaurant>{

	@Override
	public Restaurant deserialize(String topic, byte[] data) {
		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);

		Restaurant msg = null;
		try {
			msg = objectMapper.readValue(data, Restaurant.class);
		} catch (Exception e) {
			System.out.println("Exception while reading value"+e);
		}

		return msg;
	}

}
