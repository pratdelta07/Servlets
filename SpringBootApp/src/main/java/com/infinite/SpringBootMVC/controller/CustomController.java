package com.infinite.SpringBootMVC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.infinite.SpringBootMVC.model.Customer;
import com.infinite.SpringBootMVC.service.CustomerServiceImpl;

@Controller
public class CustomController {
	@Autowired
	CustomerServiceImpl cservice;
	
	@RequestMapping(value = "/", method = RequestMethod.GET, headers = "Accept=application/json")
	public String goToHomePage() {
		return "redirect:/getAllCustomers";
	}
	
	@RequestMapping(value ="/getAllCustomers", method = RequestMethod.GET)
	public String getAllCustomers(Model m) {
		m.addAttribute("Customer",new Customer());
		m.addAttribute("ListOfCustomer",cservice.getAllCustomers());
		return "customerDetails";
	}

}
