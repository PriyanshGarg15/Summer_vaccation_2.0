import java.util.Scanner;
import java.util.Stack;

public class a5_next_greater_to_right {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Stack<Character> st = new Stack<>();
        String s = sc.next();
        char[] arr = new char[s.length()];

        for (int i = s.length() - 1; i >= 0; i--) {
            char c = s.charAt(i);
            while (!st.isEmpty() && st.peek() <= c) {
                st.pop();
            }
            if (st.isEmpty()) {
                arr[i] = '-';
            } else {
                arr[i] = st.peek();
            }
            st.push(c);
        }

        for (int i = 0; i < s.length(); i++) {
            if (arr[i] == '-') {
                System.out.print("-1 ");
            } else {
                System.out.print(arr[i] + " ");
            }
        }
    }
}
