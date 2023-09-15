package com.infinite.core;
interface a{
	
	public default void display(){
		System.out.println("Display of Interface a is called");
		
	}
}

interface b{
	public default void display(){
		System.out.println("Display of Interface b is called");
}
	
public class Diamond implements a,b {
	public void display (){
		a.super.display();
		b.super.display();
	}
	public static void main(String[] args){
		
		Diamond obj = new Diamond();
		obj.display();
	}
}

}
