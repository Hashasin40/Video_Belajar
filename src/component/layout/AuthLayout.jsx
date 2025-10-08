import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAuth from "../navbar/NavbarAuth";

function AuthLayout() {
    return (
        <>
            <NavbarAuth />
            <Outlet />
        </>
    );
}

export default AuthLayout;