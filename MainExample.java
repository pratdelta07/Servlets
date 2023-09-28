package com.infinite.beans;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

 

public class MainExample {

 

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AbstractApplicationContext context=
				new ClassPathXmlApplicationContext("Sample.xml");
		Address1 customer=(Address1)context.getBean("custAddress1");
		System.out.println(customer.getCity());
		context.registerShutdownHook();

 

	}

 

}