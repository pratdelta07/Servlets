package com.infinite.collections;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;



public class CollectionMain {
	public static void main(String[] args) {
		
	AbstractApplicationContext context= new ClassPathXmlApplicationContext("applicationContext.xml");
	CollectionTest customer = (CollectionTest)context.getBean("collectiontest");
	System.out.println(customer.getLs());
	context.registerShutdownHook();
	}
}
