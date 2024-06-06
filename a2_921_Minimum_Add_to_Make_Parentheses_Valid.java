// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
import java.util.Scanner;
import java.util.Stack;
public class a2_921_Minimum_Add_to_Make_Parentheses_Valid {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        Stack<Character> stack = new Stack<>();
        int count = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                stack.push(c);
            } 
            else {
                if (!stack.isEmpty() && stack.peek() == '(') {
                    stack.pop();
                } else {
                    count++;
                }
            }
        }
        System.out.println(count+stack.size());
    }
}
