package com.infinite.SpringBootMVC.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.infinite.SpringBootMVC.model.Customer;
import com.infinite.SpringBootMVC.repository.CustomerDaoImpl;

@Service
public class CustomerServiceImpl implements ICustomerService {
	@Autowired
	CustomerDaoImpl cdo;


	@Override
	@Transactional
	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		cdo.getAllCustomers();
		return null;
	}

	@Override
	public Customer getCustomer(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addCustomer(Customer customer) {
		// TODO Auto-generated method stub

	}

	@Override
	public void updateCustomer(Customer customer) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteCustomer(int id) {
		// TODO Auto-generated method stub

	}

}
