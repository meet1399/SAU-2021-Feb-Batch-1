package com.accolite.domain;

public class Restaurant
{

	private int orderId;
	private String orderName;
	private String orderTime;
	private String orderTableId;

	

	public int getOrderId()
	{
		return orderId;
	}

	public void setOrderId(int orderId)
	{
		this.orderId = orderId;
	}

	public String getOrderName()
	{
		return orderName;
	}

	public void setOrderName(String orderName)
	{
		this.orderName = orderName;
	}

	public String getOrderTime()
	{
		return orderTime;
	}

	public void setOrderTime(String orderTime)
	{
		this.orderTime = orderTime;
	}
	
	public String getOrderTableId()
	{
		return orderTableId;
	}

	public void setOrderTableId(String orderTableId)
	{
		this.orderTableId = orderTableId;
	}

}