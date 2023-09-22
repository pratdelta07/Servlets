<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Voter Eligibility Check</title>
</head>
<body>
    <h1>Voter Eligibility Check</h1>
    <form action="CheckVoterServlet" method="post">
        <label for="name">Name:</label>
        <input type="text" name="name" required><br><br>
        <label for="age">Age:</label>
        <input type="number" name="age" required><br><br>
        <input type="submit" value="Check Eligibility">
    </form>
    <br>
    <p>${message}</p>
</body>
</html>
