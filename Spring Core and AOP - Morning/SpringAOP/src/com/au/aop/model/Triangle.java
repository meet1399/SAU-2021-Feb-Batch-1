package com.au.aop.model;

public class Triangle {
	
	private String name;

	public String getName(){
		throw new NullPointerException("Triangle Not Found");
	}

	public void setName(String name) {
		this.name = name;
	}

}
