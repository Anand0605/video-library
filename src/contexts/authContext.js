import React, { createContext, useContext, useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

const AuthProvider = ({ children }) => {

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
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    email: "gautam05102002@gmail.com",
                    password: "gautam123"
                })

            })
            const data = await res.json()
            console.log(res, data);
            localStorage.setItem("userToken", JSON.stringify(data.encodedToken));
            localStorage.setItem("foundUser", JSON.stringify(data.foundUser));
            setUserToken(data.encodedToken);
            setUserDetails(data.foundUser);

        }
        catch (err) {
            console.log(err)
        }

    };

    const logouthandler = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("foundUser");
        setUserToken("");
        setUserDetails({});
    };
    return (
        <authContext.Provider value={{ loginFunction, logouthandler, userToken }}>
            {children}
        </authContext.Provider>

    )

}
const useGlobal = () => {
    return useContext(authContext);
}

export { AuthProvider, useGlobal };

