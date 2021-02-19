import java.util.*;

public class InSlide_Q1_Calculator {
	public static int Calculator(String s)
    {
        char[] ch = s.toCharArray();        
        int length = ch.length;
         
        Stack<Integer> operand = new Stack<Integer>(); 
        Stack<Character> sign = new Stack<Character>(); 
          
        for (int i = 0; i < length; i++) 
        { 
            if ((ch[i] == '+' || ch[i] == '-') && (i==0 || ch[i-1]=='+' || ch[i-1]=='-'))
            operand.push(0);
            if(ch[i]>='0' && ch[i]<='9'){ 
                StringBuilder build=new StringBuilder();
                while (i < length && ch[i] >= '0' && ch[i] <= '9') 
                    build.append(ch[i++]);
                    i--; 
                operand.push(Integer.parseInt(build.toString())); 
            }         
            else if (ch[i] == '('){
                   sign.push(ch[i]); 
            }                  
            else if (ch[i] == ')'){ 
                while (sign.peek() != '(') 
                  operand.push(putSign(sign.pop(), operand.pop(), operand.pop())); 
                sign.pop(); 
            } 
            else if (ch[i] == '+' || ch[i] == '-' || ch[i] == '*' || ch[i] == '/' || ch[i]=='%'){ 
                while (!sign.isEmpty() && Precedence(ch[i], sign.peek())) 
                 operand.push(putSign(sign.pop(), operand.pop(), operand.pop())); 
                sign.push(ch[i]); 
            } 
        }        
        while (!sign.isEmpty()){
                operand.push(putSign(sign.pop(), operand.pop(), operand.pop())); 
        }        
        return operand.pop(); 
    }
	
    public static boolean Precedence(char op1, char op2){ 
        if (op2 == '(' || op2 == ')') 
            return false; 
        if ((op1 == '%' || op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-')) 
            return false; 
        else
            return true; 
    } 
    
    public static int putSign(char op, int b, int a) { 
        switch (op) 
        { 
        case '+': 
            return a + b; 
        case '-': 
            return a - b; 
        case '*': 
            return a * b; 
        case '/': 
            if (b == 0) 
                throw new UnsupportedOperationException("Cannot divide by zero"); 
            return a / b; 
        case '%':  
        	if (b == 0) 
                throw new UnsupportedOperationException("Cannot mod by zero"); 
            return a%b;
        
        } 
        return 0; 
    } 
    public static void main(String []args){
    	Scanner sc = new Scanner(System.in);
          
        System.out.println("Enter the number of expressions: ");
        int n = sc.nextInt();
        sc.nextLine();
        for (int i = 0; i < n; i++) {
            System.out.println("Enter the expression:");
            String input = sc.nextLine();
            System.out.println("Result : "+InSlide_Q1_Calculator.Calculator(input));
            System.out.println("---------------------------------");
        }      
    }
}
