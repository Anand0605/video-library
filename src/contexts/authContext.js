import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const authContext = createContext();

const AuthProvider = ({ children }) => {
    const toastify = {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };

    const notifyInfo = (content) => toast.info(content, toastify);
    const notifySuccess = (content) => toast.success(content, toastify);
    const notifyWarn = (content) => toast.warn(content, toastify);
    const notifyError = (content) => toast.error(content, toastify);

    const [loginInput, setLoginInput] = useState({ email: '', password: '' });
    const [signupInput, setSignupInput] = useState({ fname: '', lname: '', email: '', password: '' });
    const [userToken, setUserToken] = useState("");
    const [userDetails, setUserDetails] = useState({});
    const [createdUser, setCreatedUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        const foundUser = localStorage.getItem("foundUser");
    
        if (token && foundUser) {
            let parsedUser = {};
            try {
                parsedUser = JSON.parse(foundUser);
            } catch (error) {
                console.error("Error parsing foundUser JSON:", error);
                // Handle the error, such as clearing localStorage or setting default user details
            }
    
            setUserToken(token);
            setUserDetails(parsedUser);
        }
    }, []);
    
    

    const loginFunction = async () => {
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    email: loginInput.email,
                    password: loginInput.password
                })
            });
            const data = await res.json();

            if (data.encodedToken && data.foundUser) {
                localStorage.setItem("userToken", JSON.stringify(data.encodedToken));
                localStorage.setItem("foundUser", JSON.stringify(data.foundUser));
                setUserToken(data.encodedToken);
                setUserDetails(data.foundUser);
                setLoginInput({ email: "", password: "" });
            } else {
                notifyError("Login failed. Please check your credentials.");
            }
        } catch (err) {
            console.log(err);
            notifyError("An error occurred during login.");
        }
    };

    const signupFunction = async () => {
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({
                    fname: signupInput.fname,
                    lname: signupInput.lname,
                    email: signupInput.email,
                    password: signupInput.password
                })
            });
            const data = await res.json();

            if (data.encodedToken && data.createdUser) {
                localStorage.setItem("userToken", JSON.stringify(data.encodedToken));
                localStorage.setItem("foundUser", JSON.stringify(data.createdUser));
                setUserToken(data.encodedToken);
                setCreatedUser(data.createdUser);
                setSignupInput({ fname: "", lname: "", email: "", password: "" });
            } else {
                notifyError("Signup failed. Please try again.");
            }
        } catch (err) {
            console.log(err);
            notifyError("An error occurred during signup.");
        }
    };

    const logoutHandler = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("foundUser");
        setUserToken("");
        setUserDetails({});
    };

    const dummyLogin = () => {
        setLoginInput({ email: "gautam05102002@gmail.com", password: "gautam123" });
        loginFunction();
    };

    const signupLogin = () => {
        setSignupInput({ fname: "Anand", lname: "Gautam", email: "gautam05102002@gmail.com", password: "gautam123" });
        signupFunction();
    };

    return (
        <authContext.Provider value={{
            notifyInfo,
            notifySuccess,
            loginFunction,
            logoutHandler,
            userToken,
            dummyLogin,
            setLoginInput,
            signupFunction,
            signupLogin,
            setSignupInput
        }}>
            {children}
        </authContext.Provider>
    );
};

const useGlobalAuth = () => useContext(authContext);

export { AuthProvider, useGlobalAuth };
