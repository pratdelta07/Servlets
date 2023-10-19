package org.infinite.test;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.infinite.login.LoginExample;
import org.infinite.pojo.Login;

public class TestClass {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Login login = new Login();
		login.setUsername();
		login.setPassword();
		login.setLoginTime();
		// Get the session object.
		Session session = LoginExample.getSessionFactory().openSession();
		try {
			// Start hibernate session.
		      login = session.beginTransaction();
			// Insert a new student record in the database.
			session.save(login);
			// Commit hibernate transaction if no exception occurs.
			login.commit();
		} catch (HibernateExceptio e) {
			if (login != null) {
				// Roll back if any exception occurs.
				login.rollback();
			}
			e.printStackTrace();
		} finally {
			// Close hibernate session.
			session.close();
		}
	}}
	
	
	
	





