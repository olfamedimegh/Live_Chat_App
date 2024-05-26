import React from "react";
import MainLayout from "../layouts/Mainlayout";
import Sidebar from "../components/Sidebar";
import ProtectedRoutes from "../components/ProtectedRoutes";
import AuthOverlay from "../components/AuthOverlay";

function Home() {
    return (
        <MainLayout>
            <>
                <AuthOverlay/>
                <Sidebar/>
                HOME_PAGE
            </>
        </MainLayout>
    );
}

export default Home;
