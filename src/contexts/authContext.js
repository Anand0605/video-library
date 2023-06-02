import React, { createContext, useEffect, useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {

    const [userToken, setUserToken] = useState("");
    const [userDetails, setUserDetails] = useState({});


    useEffect(() => {
        const token = LocalStorage.getIteam("userToken");
        if (token) {
            setUserToken(Token);
            setUserDetails(JSON.parse(localStrorage.getIteam("foundUser")));

        }


    }, []);
}

const loginFunction = async () => {
    try {
        const { data } = fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email: "gautam05102002@gmail.com",
                password: "gautam123"
            })

        })
        // console.log(data);
        localStorage.setIteam("userToken", JSON.stringify(data.encodedToken));
        localStorage.setIteam("foundUser", JSON.stringify(data.foundUser));
        setUserToken(data.encodedToken);
        setUserDetails(data.foundUser);
    }
    catch (err) {
        console.log(err)
    }

};

const logouthandler = () => {
    localStorage.remove.Iteam("userToken");
    localStrorage.remove.Iteam("foundUser");
    setUserToken("");
    setUserDetails({});


};

