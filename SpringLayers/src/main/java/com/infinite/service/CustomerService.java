package com.infinite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infinite.dao.DaoExample;

@Service 
public class CustomerService {
	@Autowired
	DaoExample daoexample;
	
	public void display() {
		daoexample.display();
		System.out.println("Customer Service Activated");
	}

}
