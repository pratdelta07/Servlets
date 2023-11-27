import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Alert,
    Button,
    CardActions,
    CardContent,
    Divider,
    TextField,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const Captcha = () => {
    const randomString = Math.random().toString(36).slice(8);
    const [captcha, setCaptcha] = useState(randomString);
    const [text, setText] = useState("");
    const [valid, setValid] = useState(false);
    const [success, setSuccess] = useState(false);

    const refreshString = () => {
        setText("");
        setCaptcha(Math.random().toString(36).slice(8));
    };

    const matchCaptcha = (event) => {
        event.preventDefault();
        if (text === captcha) {
            setValid(false);
            setSuccess(true);
        } else {
            setValid(true);
            setSuccess(false);
        }
    };

    return (
        <React.Fragment>
            {success && (
                <Alert variant="outlined" sx={{ marginBottom: "50px" }}>
                    Successful
                </Alert>
            )}
            <div className="card">
                <Divider />

                <CardContent>
                    <CardActions>
                        <div className="h3">{captcha}</div>
                        <Button startIcon={<RefreshIcon />} onClick={refreshString}></Button>
                    </CardActions>

                    <form onSubmit={matchCaptcha}>
                        <TextField
                            label="Enter Captcha"
                            focused
                            value={text}
                            fullWidth
                            onChange={(e) => setText(e.target.value)}
                            error={valid}
                            helperText={valid && "Invalid Captcha"}
                        />


                    </form>
                </CardContent>
            </div>
        </React.Fragment>
    );
};

const Login = () => {
    const navigate = useNavigate();

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    const [vendorname, setVendorname] = useState("");
    const [vendorpassword, setVendorPassword] = useState("");

    const [adminname, setadminname] = useState("");
    const [adminpassword, setadminPassword] = useState("");

    const [captchaText, setCaptchaText] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [isCaptchaSuccess, setIsCaptchaSuccess] = useState(false);



    const handleUserLogin = async (event) => {
        event.preventDefault();

        if (isCaptchaSuccess) {
            try {
                const res = await axios.post("http://localhost:8080/login", {
                    username: username,
                    Password: password,
                });

                if (res.data.message === "Login Success") {
                    navigate("/Home");
                } else if (res.data.message === "username not exist") {
                    alert("Username does not exist");
                } else {
                    alert("Incorrect username or password");
                }
            } catch (err) {
                console.error(err);
                alert("An error occurred during user login");
            }
        } 
    };

    const handleVendorLogin = async (event) => {
        event.preventDefault();

        if (isCaptchaSuccess) {
            try {
                const res = await axios.post("http://localhost:8080/vendor/login", {
                    vendorname: vendorname,
                    vendorpassword: vendorpassword,
                });

                if (res.data.message === "Login Success") {
                    navigate("/VendorHome");
                } else if (res.data.message === "vendor not exist") {
                    alert("Vendor does not exist");
                } else {
                    alert("Incorrect vendor or password");
                }
            } catch (err) {
                console.error(err);
                alert("An error occurred during vendor login");
            }
        } else {
            alert("Please solve the Captcha before attempting login.");
        }
    };

    const handleAdminLogin = async (event) => {
        event.preventDefault();

        if (isCaptchaSuccess) {
            try {
                const res = await axios.post("http://localhost:8080/admin/login", {
                    adminname: adminname,
                    adminpassword: adminpassword,
                });

                if (res.data.message === "Login Success") {
                    navigate("/AdminHome");
                } else if (res.data.message === "admin not exist") {
                    alert("Admin does not exist");
                } else {
                    alert("Incorrect admin or password");
                }
            } catch (err) {
                console.error(err);
                alert("An error occurred during admin login");
            }
        } else {
            alert("Please solve the Captcha before attempting login.");
        }
    };

    const handleCaptchaSubmit = (event) => {
        event.preventDefault();

        if (captchaText === Captcha) {
            setIsCaptchaValid(false);
            setIsCaptchaSuccess(true);
        } else {
            setIsCaptchaValid(true);
            setIsCaptchaSuccess(false);
        }
    };

    return (
        <section className="bg-white dark:bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-vector/clean-medical-background_53876-116875.jpg?size=626&ext=jpg&ga=GA1.1.528249459.1700570054&semt=ais')` }}>
            <div className="w-full mx-auto text-left md:w-8/8 xl:w-2/4 md:text-center">
                <h1 className="mb-3 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                    <span className="block w-full py-2 text-transparent bg-clip-text leading-10 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Pharmacy Easy</span>
                </h1>
            </div>

            <div className="container px-4 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-4">
                    {/* User Login */}
                    <div className="mt-2  lg:w-1/2 lg:mx-2">
                        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                            <h1 className="text-lg font-medium text-gray-700">User Login</h1>

                            <form className="mt-4">
                                <div className="flex-1">
                                    <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">Username</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Username"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={username}
                                        onChange={(event) => setusername(event.target.value)}
                                    />
                                </div>

                                <div className="flex-1 mt-3">
                                    <label className="block mb-2 text-sm text-gray-400 dark:text-gray-100">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter your password."
                                        className="block w-full px-2 py-1 mt-1 text-gray-300 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>

                                <Captcha />

                                <button
                                    type="submit"
                                    className="w-full px-1 py-1 mt-1 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    onClick={handleUserLogin}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Vendor Login */}
                    <div className="mt-8 lg:w-1/2 lg:mx-6">
                        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                            <h1 className="text-lg font-medium text-gray-700">Vendor Login</h1>

                            <form className="mt-6">
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">UserName</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Username"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={vendorname}
                                        onChange={(event) => setVendorname(event.target.value)}
                                    />
                                </div>

                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter your password."
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={vendorpassword}
                                        onChange={(event) => setVendorPassword(event.target.value)}
                                    />
                                </div>

                                <Captcha />

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    onClick={handleVendorLogin}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Admin Login */}
                    <div className="mt
-8 lg:w-1/2 lg:mx-6">
                        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                            <h1 className="text-lg font-medium text-gray-700">Admin Login</h1>

                            <form className="mt-6">
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">UserName</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Username"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={adminname}
                                        onChange={(event) => setadminname(event.target.value)}
                                    />
                                </div>

                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter your password."
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={adminpassword}
                                        onChange={(event) => setadminPassword(event.target.value)}
                                    />
                                </div>

                                <Captcha />

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    onClick={handleAdminLogin}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Login;