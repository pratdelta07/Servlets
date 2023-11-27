import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 
function Register(){
    let navigate = useNavigate();
 
    // State for Customer
    const [customer, setCustomer] = useState({
 
        username: '',
        last_name: '',
        email: '',
        address: '',
        phno: '',
        password: '',
        confirm_Password: '',
    });
 
    // State for Customer errors
    const [customerErrors, setCustomerErrors] = useState({
        username: '',
        last_name: '',
        email: '',
        address: '',
        phno: '',
        password: '',
        confirm_Password: ''
    });
 
    // State for success message
    const [successMessage, setSuccessMessage] = useState("");
 
    // State for error message
    const [errorMessage, setErrorMessage] = useState("");
 
    const validateCustomer = () => {
        const errors = {};
 
        // Example validation
        if (!customer.username.trim()) {
            errors.username = "Full Name is required";
        }
        if (!customer.last_name.trim()) {
            errors.last_name = "Last Name is required";
        }
 
        if (!customer.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(customer.email)) {
            errors.email = "Invalid email format";
        }
 
        if (!customer.phno.trim()) {
            errors.phno = "Mobile is required";
        } else if (!/^\d{10}$/.test(customer.phno)) {
            errors.phno = "Invalid mobile number";
        }
 
        if (!customer.address.trim()) {
            errors.address = "Address is required";
        }
 
        if (!customer.password.trim()) {
            errors.password = "Password is required";
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(customer.password)) {
            errors.password =
                "Password must contain at least 8 characters, including at least one letter, one number, and one special character";
        }
 
        if (!customer.confirm_Password.trim()) {
            errors.confirm_Password = "Confirm Password is required";
        } else if (customer.password !== customer.confirm_Password) {
            errors.confirm_Password = "Passwords do not match";
        }
 
        setCustomerErrors(errors);
 
        return Object.keys(errors).length === 0;
    };
 
    const onInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };
 
    const onSubmit = async (e) => {
        e.preventDefault();
 
        // Validate customer data
        const isValid = validateCustomer();
 
        if (isValid) {
            try {
                // API endpoint for customer registration
                const response = await axios.post("http://localhost:8080/register", customer);
 
                // Check if the 'data' property exists before accessing it
                const responseData = response && response.data;
 
                // Set success message
                setSuccessMessage("Registration successful");
 
                // Clear the form and errors
                setCustomer({
                    username: '',
                    last_name: '',
                    email: '',
                    address: '',
                    phno: '',
                    password: '',
                    confirm_Password: '',
                });
                setCustomerErrors({});
                setErrorMessage(""); // Clear  previous error messages
 
                // Redirect or handle success
               
            } catch (error) {
               // console.error("Error during registration:", error.response.data);
 
                // Set error message
                setErrorMessage("Error during registration. Please try again.");
 
                // Clear success message
                setSuccessMessage("");
            }
            finally{
                navigate("/login");
            }
 
        }
    };
 
    return (
        <section className="bg-white dark:bg-gray-900">
            <form onSubmit={onSubmit} className="mt-6">
                <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                    <input
                        type="text"
                        placeholder="Enter your First Name"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        name="username"
                        value={customer.username}
                        onChange={onInputChange}
                    />
                    <span className="text-red-500">{customerErrors.username}</span>
                </div>
                <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                    <input
                        type="text"
                        placeholder="Enter your Last Name"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        name="last_name"
                        value={customer.last_name}
                        onChange={onInputChange}
                    />
                    <span className="text-red-500">{customerErrors.last_name}</span>
                </div>
                <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        name="email"
                        value={customer.email}
                        onChange={onInputChange}
                    />
                    <span className="text-red-500">{customerErrors.email}</span>
                </div>
                <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mobile</label>
                    <input
                        type="text"
                        placeholder="Enter your mobile number"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        name="phno"
                        value={customer.phno}
                        onChange={onInputChange}
                    />
                    <span className="text-red-500">{customerErrors.phno}</span>
                </div>
                <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Address</label>
                    <input
                        type="text"
                        placeholder="Enter your Address"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        name="address"
                        value={customer.address}
                        onChange={onInputChange}
                    />
                    <span className="text-red-500">{customerErrors.address}</span>
                </div>
                <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        name="password"
                        value={customer.password}
                        onChange={onInputChange}
                    />
                    <span className="text-red-500">{customerErrors.password}</span>
                </div>
                <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        name="confirm_Password"
                        value={customer.confirm_Password}
                        onChange={onInputChange}
                    />
                    <span className="text-red-500">{customerErrors.confirm_Password}</span>
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                    Submit
                </button>
                {/* <Link to="/VendorRegister"> */}
                <button
                    type="button"
                    onClick={() => navigate("/VendorRegister")}
                    className="w-full px-6 py-3 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
                >
                    Register as Vendor
                </button>
                {/* /</Link> */}
                {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            </form>
        </section>
    );
};
 
export default Register;