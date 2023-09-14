package com.infinite.servlet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class InsertSingleCharecters {
    public static void main(String[] args) {
        // Database connection information
        String jdbcURL = "jdbc:mysql://localhost:3305/Local_Connection";
        String username = "root";
        String password = "Victor@2307";

        // Input character
        String inputCharacter = "a"; // Change this to your desired character

        try {
            // Establish a database connection
            Connection connection = DriverManager.getConnection(jdbcURL, username, password);

            // SQL query with a prepared statement to insert a single character into the employee's full name
            String sql = "UPDATE employees SET full_name = CONCAT(full_name, ?) WHERE employee_id = ?";

            // Create a PreparedStatement
            PreparedStatement preparedStatement = connection.prepareStatement(sql);

            // Set the parameters in the prepared statement
            preparedStatement.setString(1, inputCharacter);
            int employeeId = 0;
			preparedStatement.setInt(2, employeeId); // Replace with the actual employee_id

            // Execute the update query
            int rowsAffected = preparedStatement.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Record inserted");
            } 
            else {
                System.out.println("No record updated. Check the employee_id.");
            }

            // Close the resources
            preparedStatement.close();
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
    }
}



