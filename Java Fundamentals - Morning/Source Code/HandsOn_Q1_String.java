import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class HandsOn_Q1_String {
	public static void main(String []args)
    {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter the original string: ");
        String originalString = sc.nextLine();
        System.out.println("Enter the regular expression: ");
        String regularExpression = sc.nextLine();
        System.out.println("Enter the replacement string: ");
        String replacementString = sc.nextLine();
        
        Pattern p = Pattern.compile(regularExpression);
        Matcher m = p.matcher(originalString); 

        originalString = m.replaceAll(replacementString);
        System.out.println("String after replacement: " + originalString);
    }

}
