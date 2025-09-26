import React from "react";

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem("User");
        window.location.href = "/";
    }
    return (
        <>
            <button className="bg-red-500 px-4 py-2 text-white rounded-sm" onClick={handleLogout}>Sign Out</button>
        </>
    )
}
export default Logout;