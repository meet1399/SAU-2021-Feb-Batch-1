import java.util.*;

class PrimeException extends Exception {
	
}
public class HandsOn_Q3_Exception {
	public static void main(String []args){
        int count=1;
        while(count<=100) {
        	try {
        		if(isPrime(count))
        			throw new PrimeException();
        	}
        	catch(PrimeException e) {
        		System.out.println("A prime Number is found:"+count);
        	}
        	finally {
        		count++;
        	}
        }                
    }
	
	public static boolean isPrime(int n) { 
        if (n <= 1) 
            return false; 
        for (int i = 2; i < n; i++) 
            if (n % i == 0) 
                return false; 
  
        return true; 
    } 
}
