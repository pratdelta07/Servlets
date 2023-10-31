package com.infinite.threads;

	class MyExample extends Thread
	{
		public void display()
		{
			
			System.out.println(this.getState());
		}
	}
	 
	public class ImplThreads {
		
		public static void main(String...a)
		{
			try {
				Thread.sleep(88876);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			new MyExample().display();
		}
	 
	}


