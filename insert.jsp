<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert Medicine Details</title>
</head>
<body>
<form method="post" action="insertvalues">
Medicine Number <input type="text" name="medno">
<br><br>
Medicine Name <input type="text" name="medname">
<br><br>
Expiry Date <input type="date" name="date">
<br><br>
Medicine Quantity <input type="text" name="quantity">
<br><br>
Medicine Cost <input type="text" name="cost">
<br><br>
<input type="submit" name="insert">
<br><br>
<input type="reset" name="reset"/>
</form>
</body>
</html>