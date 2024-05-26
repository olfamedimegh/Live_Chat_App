
import MainLayout from "../layouts/Mainlayout";
import Sidebar from "../components/Sidebar";

import AuthOverlay from "../components/AuthOverlay";
import ProfileSettings from "../components/ProfileSettings";

function Home() {
    return (
        <MainLayout>
            <>
                <AuthOverlay/>
                <ProfileSettings/>
                <Sidebar/>
            </>
        </MainLayout>
    );
}

export default Home;
