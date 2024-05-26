import MainLayout from "../layouts/Mainlayout";
import Sidebar from "../components/Sidebar";
import AuthOverlay from "../components/AuthOverlay";
import ProfileSettings from "../components/ProfileSettings";
//import ProtectedRoutes from '../components/ProtectedRoutes.tsx';
import RoomList from '../components/RoomList.tsx';
import AddChatroom from '../components/AddChatroom.tsx';

// juste lezim el RomListe bel ProtectedRoutes here ama for testing ne7it'ha


function Home() {
    return (
        <MainLayout>
            <>
                <AuthOverlay/>
                <ProfileSettings/>
                <Sidebar/>

              < AddChatroom />
              <RoomList />

           </>
        </MainLayout>
    );
}

export default Home;
