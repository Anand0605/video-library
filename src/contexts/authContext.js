import React, { createContext, useContext, useEffect, useState, } from "react";
// import { useNavigate } from "react-router-dom";
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

    const [loginInput, setLoginInput] = useState({
        email: '',
        password: ''
    });

    const [signupInput, setSignupInput] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    })
    const [userToken, setUserToken] = useState("");
    const [userDetails, setUserDetails] = useState({});

    const [createdUser, setCreatedUser] = useState({})



    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token) {
            setUserToken(token);
            setUserDetails(JSON.parse(localStorage.getItem("foundUser")));
        }
    }, []);

    /*-------Login------*/

    const loginFunction = async () => {
        // console.log(loginInput.email)
        // console.log(loginInput.password)
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    email: loginInput.email,
                    password: loginInput.password
                })

            })
            const data = await res.json()
            console.log(data);

            localStorage.setItem("userToken", JSON.stringify(data.encodedToken));
            localStorage.setItem("foundUser", JSON.stringify(data.foundUser));
            setUserToken(data.encodedToken);
            setUserDetails(data.foundUser);
            setLoginInput({
                email: "",
                password: ""
            })

        }
        catch (err) {
            console.log(err)
        }

    };

    const dummyLogin = () => {
        setLoginInput({
            email: "gautam05102002@gmail.com",
            password: "gautam123"
        })
        if (loginInput.email === "gautam05102002@gmail.com")
            loginFunction()
    };


    /*----------Signup----------*/

    const signupFunction = async () => {
        // console.log(loginInput.email)
        // console.log(loginInput.password)
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({
                    fname: signupInput.fname,
                    lname: signupInput.lname,
                    email: signupInput.email,
                    password: signupInput.password
                })

            })
            const data = await res.json()
            console.log(data);
            if (data.error) {
                console.log(data.error)
            }
            else {
                localStorage.setItem("userToken", JSON.stringify(data.encodedToken));
                localStorage.setItem("foundUser", JSON.stringify(data.createdUser));
                setUserToken(data.encodedToken);
                setCreatedUser(data.createdUser);
                setSignupInput({
                    fname: "",
                    lname: "",
                    email: "",
                    password: ""
                })
            }

        }
        catch (err) {
            console.log(err)
        }

    };

    const signuplogin = () => {
        setSignupInput({
            fname: "Anand",
            lname: "Gautam",
            email: "gautam05102002@gmail.com",
            password: "gautam123"
        })
        if (signupInput.email === "gautam05102002@gmail.com")
            signupFunction()
    };


    const logouthandler = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("foundUser");
        setUserToken("");
        setUserDetails({});
    };

    return (
        <authContext.Provider value={{ notifyInfo, notifySuccess, loginFunction, logouthandler, userToken, dummyLogin, setLoginInput, signupFunction, signuplogin, setSignupInput }}>
            {children}
        </authContext.Provider>

    )

}
const useGlobalAuth = () => {
    return useContext(authContext);
}

export { AuthProvider, useGlobalAuth };

