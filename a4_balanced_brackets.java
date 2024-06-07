import java.util.*;

public class a4_balanced_brackets {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);       
        Stack<Character> st = new Stack<>();
        String s = sc.next();
        boolean isBalanced = true;
        
        for (char c : s.toCharArray()) {
            if (c == '{' || c == '[' || c == '(') {
                st.push(c);
            } else if (c == '}' || c == ']' || c == ')') {
                if (st.isEmpty()) {
                    isBalanced = false;
                    break;
                }
                char top = st.peek();
                if ((c == '}' && top == '{') || 
                    (c == ']' && top == '[') || 
                    (c == ')' && top == '(')) {
                    st.pop();
                } else {
                    isBalanced = false;
                    break;
                }
            }
        }
        
        if (!st.isEmpty()) {
            isBalanced = false;
        }

        if (isBalanced) {
            System.out.println("Balanced");
        } else {
            System.out.println("Not Balanced");
        }
    }
}
