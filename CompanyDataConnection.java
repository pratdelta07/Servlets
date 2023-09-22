package com.infinite.java;

	import java.sql.Connection;
	import java.sql.DriverManager;
	import java.sql.PreparedStatement;
	import java.sql.SQLException;

	public class CompanyDataConnection{

	    //Using Private static to showcase Database URL, Username , and Password
	    private static final String DB_URL = "jdbc:mysql://localhost:3306/Local_Connection_(1)";
	    private static final String DB_USER = "root";
	    private static final String DB_PASSWORD = "Victor@2307";

	    public static void main(String[] args) {
	        Connection connection = null;
	        PreparedStatement preparedStatement = null;

	        try {
	            // Register JDBC driver
	            Class.forName("com.mysql.cj.jdbc.Driver");

	            // Opening connection
	            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

	            // SQL queries 
	            String sql = "INSERT INTO Company (Emp.Id., name, CompanyName,  Address, Country, No_of_employees) VALUES (?, ?, ?, ?, ?)";

	            // To Create a PreparedStatement object
	            preparedStatement = connection.prepareStatement(sql);

	            // Used prepared statements to set the values for the placeholders.
	            preparedStatement.setInt(1, 111);
	            preparedStatement.setString(2, "Alpha");
	            preparedStatement.setString(3, "Infinite");
	            preparedStatement.setString(4, "Vizag");
	            preparedStatement.setString(5, "Ind");
	            preparedStatement.setInt(6, 400);

	            // Execute the insert query
	            int rowsInserted = preparedStatement.executeUpdate();

	            if (rowsInserted > 0) {
	                System.out.println("Data inserted successfully.");
	            } else {
	                System.out.println("Failed to insert data.");
	            }
	        } catch (ClassNotFoundException | SQLException e) {
	            e.printStackTrace();
	        } 
	        finally {
	           
	        	// Implemented "finally" to close the PreparedStatement and Connection
	            try {
	                if (preparedStatement != null) {
	                    preparedStatement.close();
	                }
	                if (connection != null) {
	                    connection.close();
	                }
	            } catch (SQLException e) {
	                e.printStackTrace();
	            }
	        }
	    }
	}



