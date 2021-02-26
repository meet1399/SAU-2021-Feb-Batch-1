package com.hibernate1.EmployeeMgmt;

import java.util.*;
import org.hibernate.*;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Manager
{
    public static void main( String[] args )
    {
    	Scanner sc = new Scanner(System.in);
    	Menu m = new Menu();
    	
        int option;
        String sql;
        do {
            m.displayMenu();
            option = sc.nextInt();
            Configuration configuration = new Configuration().configure().addAnnotatedClass(Employee.class);
    		SessionFactory factory = configuration.buildSessionFactory();
    		Session session = factory.openSession();
    		Transaction tx = session.beginTransaction();
            switch (option)
            {
                case 1:
                	System.out.println("\n");
                	Employee newemp = m.addEmployee();
                	if (newemp==null)
                		System.out.println("\n----------No Employee Added----------");
                	else {
                		session.save(newemp);
                		System.out.println("\n----------New Employee Added----------");
                		tx.commit();
                	}
                	System.out.println("\n");
                	break;
                	
                case 2:
                	System.out.println("\n");
                	try {
                	System.out.println("Enter Employee ID For Which Update Is Required");
                	int id = sc.nextInt();
                	int choice = m.updateChoice();
                	Employee updateemp = (Employee) session.get(Employee.class, id);
                	switch(choice)
                	{
                		case 1:
                			System.out.println("Enter New ID");
                			int newid = sc.nextInt();
                			updateemp.setId(newid);
                			System.out.println("\n----------ID Updated----------");
                			tx.commit();                    		
                    		break;

                		case 2:
                			System.out.println("Enter New First Name");
                			String newfn = sc.next();
                			updateemp.setFname(newfn);
                			System.out.println("\n----------First Name Updated----------");
                			tx.commit();                                                                                                                                                       
                    		break;

                		case 3:
                			System.out.println("Enter New Last Name");
                			String newln = sc.next();
                			updateemp.setLname(newln);
                			System.out.println("\n----------Last Name Updated----------");
                			tx.commit();                                                                                                                                                       
                    		break;
                    		
                		case 4:
                			System.out.println("Enter New Age");
                			int newage = sc.nextInt();
                			updateemp.setAge(newage);
                			System.out.println("\n----------Age Updated----------");
                			tx.commit();                   			
                    		break;
                    		
                		case 5:
                			System.out.println("Enter New Salary");
                			int newsal = sc.nextInt();
                			updateemp.setSalary(newsal);
                			System.out.println("\n----------Salary Updated----------");
                			tx.commit();                   			
                    		break;
                    		
                		case 6:
                			System.out.println("Enter New DOB");
                			String newdob = sc.next();
                			updateemp.setDob(newdob);
                			System.out.println("\n----------DOB Updated----------");
                			tx.commit();                                                                                                                                                       
                    		break;
                    		
                		case 7:
                			System.out.println("Enter New Designation");
                			String newdsg = sc.next();
                			updateemp.setDesignation(newdsg);
                			System.out.println("\n----------Designation Updated----------");
                			tx.commit();                                                                                                                                                       
                    		break;

                		default:
                			System.out.println("Invalid Choice");
                			break;
                	}}
                	catch(Exception ex) {
                		System.out.println("No Such Employee Found");
                	}
                	System.out.println("\n");
                    break;
                    
                case 3:
                	System.out.println("\n");
                	try {
	                    System.out.println("Enter ID Of Employee To Be Deleted");
	                    int delid = sc.nextInt();
	                    System.out.println("Warning: This Cannot Be Recovered\n To Delete Press Y Else Press N");
	                    char c = sc.next().charAt(0);
	                    if(c=='Y') {
	                    Employee deleteemp = (Employee) session.load(Employee.class, delid);
	                    session.delete(deleteemp);	                    
	                    System.out.println("\n----------Employee Deleted----------");
            			tx.commit();
            			
	                    }
	                    else if(c=='N'){
	                    	System.out.println("\n----------No Employee Deleted----------");
	                    	break;
	                    }
            		}
            		catch(Exception ex) {
            			System.out.println("No Such Employee Found");
            		}
            		System.out.println("\n");
                    break;
                    
                case 4:
                	System.out.println("\n");   
                	Query query = session.createQuery("from Employee");
                	List<Employee> employees =  query.list();
                	System.out.println("------------All Employee Details---------");
                	for(Employee e : employees) {
                		System.out.println(e.toString());
                	}   
                	tx.commit();
            		System.out.println("\n");
            		break;

                case 5:
                	System.out.println("\n");                	
                	System.out.println("Enter Employee ID For Details");
                    int detailid = sc.nextInt();
                    System.out.println("\n------------Employee Detail---------");
                	Employee detailemp = (Employee) session.get(Employee.class, detailid);
                	System.out.println(detailemp.toString());
                	tx.commit();
                	System.out.println("\n");
                	break;
                
                case 6:
                	System.out.println("\n");
                	System.out.println("Thank You For Using Employee Management");
                	session.close();
                	factory.close();
                	break;
                	
                default:
                    System.out.println("Enter value between 1 and 5. Enter 6 to Exit");
            }
        } while (option != 6);

    }
}
