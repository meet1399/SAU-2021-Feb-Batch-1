import java.util.*;

public class InSlide_Q2_Flag {
	public static void main(String []args) {
		for (int i = 0; i < 15; i++) {
			for (int j = 0; j < 46; j++) {
				if(i < 9 && j < 12){
					if((i+j)%2 == 0 && j != 11)
						System.out.print("*");
					else
						System.out.print(" ");
				}
				else
					System.out.print("=");
			}
			System.out.println();
		}  
	}
}
