package com.infinite.SpringBootMVC.controller;

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
