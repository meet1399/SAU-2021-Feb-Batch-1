package com.hibernate2.HibernateAssociateMapping;

import java.util.HashSet;
import java.util.Set;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.hibernate2.Util.Util;

public class EcommerceManager 
{
    public static void main( String[] args )
    {
    	Session session = Util.getSession();

		Product p1 = new Product();
		Product p2 = new Product();

		Categories c1 = new Categories();
		Categories c2 = new Categories();
		Categories c3 = new Categories();

		Supplier s1 = new Supplier();
		Supplier s2 = new Supplier();
		Supplier s3 = new Supplier();
		
		p1.setPid(101);
		p1.setPname("Product 1");
		p2.setPid(102);
		p2.setPname("Product 2");		
		
		c1.setCid(1);
		c1.setCname("Category 1");
		c2.setCid(2);
		c2.setCname("Category 2");
		c3.setCid(3);
		c3.setCname("Category 3");
		
		s1.setSid(999);
		s1.setSname("Supplier 1");
		s2.setSid(888);
		s2.setSname("Supplier 2");
		s3.setSid(777);
		s3.setSname("Supplier 3");
		
		Set<Categories> set1 = new HashSet<>();
		set1.add(c1);
		set1.add(c3);
		
		p1.setCategories(set1);
		
		Set<Categories> set2 = new HashSet<>();
		set2.add(c2);
		
		p2.setCategories(set2);
		
		c1.setProduct(p1);
		c2.setProduct(p2);
		c3.setProduct(p1);
		
		Set<Supplier> set3 = new HashSet<>();
		set3.add(s1);
		set3.add(s3);
		
		Set<Supplier> set4 = new HashSet<>();
		set4.add(s2);
		
		s1.setCategories(set1);
		s2.setCategories(set2);
		s3.setCategories(set1);
		
		c1.setSupplier(set3);
		c2.setSupplier(set4);
		c3.setSupplier(set3);
		

		Transaction tx = session.beginTransaction();

		session.save(p1);
		session.save(p2);
		session.save(c1);
		session.save(c2);
		session.save(c3);
		session.save(s1);
		session.save(s2);
		session.save(s3);
	
		tx.commit();
		session.close();
		System.out.println("----------Product to Categories : One to Many Done !!!----------\n");
		System.out.println("----------Categories to Products : Many to One Done !!!----------\n");
		System.out.println("----------Categories to Suppliers : Many to Many !!!----------\n");
    }
}
