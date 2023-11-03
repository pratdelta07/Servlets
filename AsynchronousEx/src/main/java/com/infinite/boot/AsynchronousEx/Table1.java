package com.infinite.boot.AsynchronousEx;

class Table {
	synchronized void printTable(int n) {// synchronized method
		for (int i = 1; i <= 5; i++) {
			System.out.println(n * i);
			try {
				Thread.sleep(400);
			} catch (Exception e) {
				System.out.println(e);
			}
		}

	}
}

class MyThread11 extends Thread {
	Table t;

	MyThread11(Table t) {
		this.t = t;
	}

	public void run() {
		t.printTable(5);
	}

}

class MyThread22 extends Thread {
	Table t;

	MyThread22(Table t) {
		this.t = t;
	}

	public void run() {
		t.printTable(100);
	}
}

public class Table1 {
	public static void main(String[] args) {
		Table t1 = new Table();
		MyThread11 m1 = new MyThread11(t1);
		MyThread22 m2 = new MyThread22(t1);
		m1.start();
		m2.start();

	}
}
