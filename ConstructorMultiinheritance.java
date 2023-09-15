package com.infinite.core;

class ab{
	public ab(){
		System.out.println("Constructor in ab is called");
	}
}
class bc extends ab{
	public bc(){
		System.out.println("Constructor in bc is called");
	}
}
 class ConstructorMultiinheritance extends bc {
	 public ConstructorMultiinheritance(){
		 System.out.println("Constructor in the lowest subclass");
		 
	 }

}
