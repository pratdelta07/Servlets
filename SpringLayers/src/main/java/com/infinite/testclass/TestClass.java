package com.infinite.testclass;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.infinite.service.CustomerService;

public class TestClass {
	
	public static void main(String [] args){
		ApplicationContext context = 
	    		new ClassPathXmlApplicationContext ("Spring-AutoScan.xml");

	 

	    	CustomerService cust = (CustomerService)context.getBean("customerService");
	    	cust.display();
	}

}
