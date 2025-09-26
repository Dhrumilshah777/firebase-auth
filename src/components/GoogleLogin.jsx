import React from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const GoogleLogin = () => {
    useEffect(()=>{
        google.accounts.id.initialize({
            client_id: "907882925427-k5m0sam40ti8hqv7llf9quslpfri2j3e.apps.googleusercontent.com",
            callback: handleResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById("googleSignin"),
            {
                theme : "outline",
                size : "large"
            }
        );
    },[])

    const handleResponse = (response) => {
        const userObject = jwtDecode(response.credential);
        console.log("User  :", userObject);
        localStorage.setItem("User", JSON.stringify(userObject));
        window.location.href = "/home";
    }
    return (
        <>
            <div id="googleSignin" style={{width: "300px", margin: "0 auto"}}></div>
        </>
    )
}
export default GoogleLogin;