import React, { createContext, useContext, useEffect, useState, } from "react";
// import { useNavigate } from "react-router-dom";

const authContext = createContext();

const AuthProvider = ({ children }) => {

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

            setCreatedUser(JSON.parse(localStorage.getItem("createdUser")))

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
            if (data.error) {
                console.log(data.error)
            }
            else {
                localStorage.setItem("userToken", JSON.stringify(data.encodedToken));
                localStorage.setItem("foundUser", JSON.stringify(data.foundUser));
                setUserToken(data.encodedToken);
                setUserDetails(data.foundUser);
                setLoginInput({
                    email: "",
                    password: ""
                })
            }

        }
        catch (err) {
            console.log(err)
        }

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
                localStorage.setItem("createdUser", JSON.stringify(data.createdUser));
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
    const dummyLogin = () => {
        setLoginInput({
            email: "gautam05102002@gmail.com",
            password: "gautam123"
        })
        if (loginInput.email === "gautam05102002@gmail.com")
            loginFunction()
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

    const signuplogouthandler = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("createdUser");
        setUserToken("");
        setCreatedUser({});
    };
    return (
        <authContext.Provider value={{ loginFunction, logouthandler, userToken, dummyLogin, setLoginInput, signupFunction, signuplogin, setSignupInput, signuplogouthandler }}>
            {children}
        </authContext.Provider>

    )

}
const useGlobalAuth = () => {
    return useContext(authContext);
}

export { AuthProvider, useGlobalAuth };

