import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoutes = (props) => {
    const { user } = useAuth();
    return user ? <Outlet /> : <Navigate to="/login" />;
};
