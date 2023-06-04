import React, { createContext, useContext, useEffect, useState, } from "react";
// import { useNavigate } from "react-router-dom";

const authContext = createContext();

const AuthProvider = ({ children }) => {

    const [loginInput, setLoginInput] = useState({
        email: '',
        password: ''
    });
    const [userToken, setUserToken] = useState("");
    const [userDetails, setUserDetails] = useState({});



    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token) {
            setUserToken(token);
            setUserDetails(JSON.parse(localStorage.getItem("foundUser")));

        }

    }, []);

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
    const dummyLogin = () => {
        setLoginInput({
            email: "gautam05102002@gmail.com",
            password: "gautam123"
        })
        if (loginInput.email === "gautam05102002@gmail.com")
            loginFunction()
    };

    const logouthandler = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("foundUser");
        setUserToken("");
        setUserDetails({});
    };
    return (
        <authContext.Provider value={{ loginFunction, logouthandler, userToken, dummyLogin, setLoginInput }}>
            {children}
        </authContext.Provider>

    )

}
const useGlobalAuth = () => {
    return useContext(authContext);
}

export { AuthProvider, useGlobalAuth };

