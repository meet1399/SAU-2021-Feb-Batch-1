package com.hibernate1.EmployeeMgmt;

import java.util.Scanner;

public class Menu {
	Scanner sc = new Scanner(System.in);
	public void displayMenu() {
		System.out.println("\nMENU for Employee Management\n1- Add Employee\n2- Update Employee\n3- Delete Employee\n4- Get All Employee\n5- Get Employee by ID\n6- Exit\nEnter your choice: ");
	}
	
	public Employee addEmployee() {
		Employee e=new Employee();
		
		try {
		System.out.println("Enter ID");
		e.setId(sc.nextInt());
		
		System.out.println("Enter First Name");
		e.setFname(sc.next());
		
		System.out.println("Enter Last Name");
		e.setLname(sc.next());
		
		System.out.println("Enter Age");
		int age = sc.nextInt();
		String agestr = ""+age;
		if(agestr.length()!=2)
			throw new ArithmeticException();
		else
			e.setAge(age);
		
		System.out.println("Enter Salary");
		e.setSalary(sc.nextInt());
		
		System.out.println("Enter DOB (dd-mm-yyyy)");
		e.setDob(sc.next());
		
		System.out.println("Enter Designation");
		e.setDesignation(sc.next());
		return e;
		}
		catch(Exception ex) {
			System.out.println("Age should be of 2 digits");
		}
		return null;
		
	}
	
	public int updateChoice(){		
		System.out.println("Enter Attribute to update:\n1- ID\n2-First Name\n3- Last Name\n4- Age\n5- Salary\n6- DOB\n7- Designation");
		int choice = sc.nextInt();
		return choice;
	}
}
