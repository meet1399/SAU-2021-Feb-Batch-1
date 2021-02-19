import java.io.*;
import java.util.*;

class Employee implements Serializable {
	 UUID serialversionUID = new UUID(100,10);
	 transient int id;
	 String name;
	 int age;
	 int salary;
	 transient int experience;
	 
	 public Employee(int id, String name, int age, int salary, int experience)
	 {
		 this.id = id;
		 this.name = name;
		 this.age = age;
		 this.salary = salary;
		 this.experience=experience;
	 }
}
 public class HandsOn_Q4_Serialization{ 
	 public static void main(String []args){
		 Employee emp = new Employee(12345, "Meet", 21, 1100000, 1);
		 String filename = "file.txt";
		 try {
			 FileOutputStream file = new FileOutputStream(filename);
			 ObjectOutputStream out = new ObjectOutputStream(file);
			 out.writeObject(emp);
			 out.close();
			 file.close();
			 System.out.println("Object serialized....");
			 System.out.println("Data before deserialization: ");
			 display(emp);
		 }
		 catch (Exception e) { }
		 emp = null;
		 System.out.println("---------------------------------");
		 try {
			 FileInputStream file = new FileInputStream(filename);
			 ObjectInputStream in = new ObjectInputStream(file);
			 emp = (Employee) in.readObject();
			 in.close();
			 file.close();
			 System.out.println("Object deserialized....");
			 System.out.println("Data after deserialization: ");
			 display(emp);
		 }
		 catch (Exception e) { }
	 }
	 public static void display(Employee emp){
		 System.out.println("id = " + emp.id);
		 System.out.println("name = " + emp.name);
		 System.out.println("age = " + emp.age);		 
		 System.out.println("salary = " + emp.salary);
		 System.out.println("experience =" + emp.experience);
	 }
 }

