package org.onlineshoppingportal.controller;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import org.apache.log4j.Logger;
import org.onlineshoppingportal.authentication.SecurityService;
import org.onlineshoppingportal.dao.AccountDao;
import org.onlineshoppingportal.dao.OrderDao;
import org.onlineshoppingportal.dao.ProductDao;
import org.onlineshoppingportal.entity.Account;
import org.onlineshoppingportal.entity.Order;
import org.onlineshoppingportal.entity.Product;
import org.onlineshoppingportal.exceptions.AlreadyLoginException;
import org.onlineshoppingportal.exceptions.NoOrderFoundException;
import org.onlineshoppingportal.exceptions.ProductOutOfStockException;
import org.onlineshoppingportal.validator.AccountValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Controller
@Transactional
@EnableWebMvc
public class MainController {
	public static Logger logger = Logger.getLogger(MainController.class);
	@Autowired
	private OrderDao orderDAO;

	@Autowired
	private ProductDao productDAO;

	@Autowired
	private AccountDao accountDao;

	@Autowired
	private SecurityService securityService;

	@Autowired
	private AccountValidator accountValidator;

	@InitBinder
	public void myInitBinder(WebDataBinder dataBinder) {
		Object target = dataBinder.getTarget();
		if (target == null) {
			return;
		}
		if (logger.isDebugEnabled())
			logger.debug("Target =" + target);

		if (target.getClass() == Account.class)
			dataBinder.setValidator(accountValidator);

	}

	@RequestMapping("/403")
	public String accessDenied(HttpServletRequest request) {
		logger.error("Access Denied URL =" + request.getRequestURL());
		return "/403";
	}

	// GET: Show Login Page
	@RequestMapping(value = { "/login" }, method = RequestMethod.GET)
	public String login(HttpServletRequest request) {
		if (request.getUserPrincipal() != null)
			throw new AlreadyLoginException();
		return "login";
	}

	// GET: Show Sign Up Page
	@RequestMapping(value = { "/signUp" }, method = RequestMethod.GET)
	public String signUpForm(Model model, HttpServletRequest request) {
		if (request.getUserPrincipal() != null)
			throw new AlreadyLoginException();
		model.addAttribute("account", new Account());
		return "signUp";
	}

	@RequestMapping(value = { "/signUp" }, method = RequestMethod.POST)
	public String signUpFormProcess(@Validated Account account, BindingResult bindingResult,
			HttpServletRequest request) {
		if (request.getUserPrincipal() != null)
			throw new AlreadyLoginException();

		if (bindingResult.hasErrors()) {
			return "signUp";
		}
		String password = account.getPassword();
		accountDao.saveAccount(account);
		securityService.autologin(account.getUserName(), password);
		return "redirect:/productList";
	}

	// Product List page.
	@RequestMapping({ "/productList", "/" })
	public String listProductHandler(
			Model model/*
						 * ,
						 * 
						 * @RequestParam(value = "name", defaultValue = "")
						 * String likeName,
						 * 
						 * @RequestParam(value = "page", defaultValue = "1") int
						 * page
						 */) {

		/*
		 * final int maxResult = 5; final int maxNavigationPage = 10;
		 */
		/*
		 * PaginationResult<ProductInfo> result = productDAO.queryProducts(page,
		 * maxResult, maxNavigationPage, likeName);
		 * model.addAttribute("paginationProducts", result);
		 */
		// List<ProductInfo> list = result.getList().stream().filter(p ->
		// p.getQuantity() != 0).collect(Collectors.toList());
		// result.setList(list);
		// System.out.println(list);

		System.out.println(productDAO.getAllProducts());

		model.addAttribute("list", productDAO.getAllProducts());
		return "productList";
	}

	@RequestMapping({ "/buyProduct" })
	public String buyProduct(HttpServletRequest request, Model model, //
			@RequestParam(value = "code", defaultValue = "") String code) {
		if (code.isEmpty()) {
			return "redirect:/productList";
		}

		Product product = null;
		if (code != null && code.length() > 0) {
			product = productDAO.findProduct(code);
		}
		if (product != null) {
			if (product.getQuantity() == 0) {
				logger.error("Product out of stock having code " + code);
				throw new ProductOutOfStockException();
			}
			model.addAttribute("product", product);
		}
		return "confirmation";
	}

	@RequestMapping(value = { "/purchase" }, method = RequestMethod.POST)
	// Avoid UnexpectedRollbackException
	@Transactional(propagation = Propagation.NEVER)
	public String purchaseProduct(HttpServletRequest request, Model model) {
		String code = request.getParameter("code");
		int quantity = Integer.parseInt(request.getParameter("quantity"));
		OrderDao order = (OrderDao) orderDAO.saveOrder(code, quantity, securityService.findLoggedInUsername());
		model.addAttribute("order", order);
		if (logger.isInfoEnabled())
			logger.info("Product purchased having code " + code + ", quantity " + quantity);
		return "orderDetail";
	}

	@RequestMapping(value = { "/orderList" }, method = RequestMethod.GET)
	public String getOrderByUsername(HttpServletRequest request, Model model) {
		List<Order> list = orderDAO.getOrdersByUserName(securityService.findLoggedInUsername());
		if (list.isEmpty())
			throw new NoOrderFoundException();
		model.addAttribute("list", list);
		return "orderList";
	}

}
