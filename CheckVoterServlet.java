package com.infinite.java;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.security.sasl.SaslException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

	@WebServlet("/CheckVoterServlet")
	public class CheckVoterServlet<HttpServletResponse> extends HttpServlet {
	    private static final long serialVersionUID = 1L;
	    
	    // Database configuration
	    private static final String DB_URL = "jdbc:mysql://localhost:3306/LocalConnection_(1)";
	    private static final String DB_USER = "root";
	    private static final String DB_PASSWORD = "Victor@2307";

	    protected void doPost(HttpServletRequest request, HttpServletResponse response)
	            throws SaslException, IOException {
	        String name = request.getParameter("name");
	        int age = Integer.parseInt(request.getParameter("age"));
	        boolean canVote = age >= 18;

	        try {
	            Class.forName("com.mysql.cj.jdbc.Driver");
	            Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
	            String sql = "INSERT INTO VoterDetails (name, age, can_vote) VALUES (?, ?, ?)";
	            PreparedStatement preparedStatement = connection.prepareStatement(sql);
	            preparedStatement.setString(1, name);
	            preparedStatement.setInt(2, age);
	            preparedStatement.setBoolean(3, canVote);
	            preparedStatement.executeUpdate();
	            preparedStatement.close();
	            connection.close();
	        } catch (ClassNotFoundException | SQLException e) {
	            e.printStackTrace();
	        }

	        // Set the success message and redirect to details.jsp
	        String message = "Details updated successfully with the current date";
	        request.setAttribute("message", message);
	        request.getRequestDispatcher("details.jsp").forward(request, response);
	    }
	}

	


