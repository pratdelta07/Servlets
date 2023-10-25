package com.infinite.SpringBootMVC.repository;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.infinite.SpringBootMVC.model.Customer;

@Repository
public class CustomerDaoImpl implements ICustomerDao {
	@Autowired
	private SessionFactory sfactory;

	public void setSfactory(SessionFactory sfactory) {
		this.sfactory = sfactory;
	}

	@Override
	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		Session ses= this.sfactory.getCurrentSession();
		List<Customer> ls=ses.createQuery("from Customer").list();
		return ls;
	}

	@Override
	public Customer getCustomer(int id) {
		// TODO Auto-generated method stub	
		return null;
	}

	@Override
	public Customer addCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return null;
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
