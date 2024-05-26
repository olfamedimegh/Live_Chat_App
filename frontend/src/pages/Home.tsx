import React from "react";
import MainLayout from "../layouts/Mainlayout";
import Sidebar from "../components/Sidebar";
import ProtectedRoutes from "../components/ProtectedRoutes";

function Home() {
    return (
        <MainLayout>
            <>
                <Sidebar/>
                HOME_PAGE
            </>
        </MainLayout>
    );
}

export default Home;
