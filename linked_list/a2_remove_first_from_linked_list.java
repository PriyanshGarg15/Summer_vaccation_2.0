
//ismeh hamari linkedlist bani heh 
//agar 1 elemnt heh toh head tail ko null set karna yad rakhe
//agar koi element nahi hai toh print list is empty
import java.util.*;

public class a2_remove_first_from_linked_list {
    public static class Node {
        int data;
        Node next;
        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    public static class LinkedList {
        Node head;
        Node tail;
        int size;

        public void addLast(int val) {
            Node temp = new Node(val);
            if (size == 0) {
                head = tail = temp;
            } else {
                tail.next = temp;
                tail = temp;
            }
            size++;
        }

        public void display() {
            Node temp = head;
            while (temp != null) {
                System.out.print(temp.data + " ");
                temp = temp.next;
            }
            System.out.println();
        }

        public void printSize() {
            System.out.println(size);
        }

        public void remove_first()
        {
            if(size>0)
            {
                head=head.next;
                size--;
            }
            else if(size==1)
            {
                head=tail=null;
                size=0;
            }
            else
            {
                System.out.println("list is empty");
            }
        }

    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.addLast(10);
        list.addLast(20);
        list.addLast(30);
        list.display(); 
        list.printSize(); 
        list.remove_first();
        list.display();
        list.printSize();
    }
}
