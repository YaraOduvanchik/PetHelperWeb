import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import CalendarPage from "./pages/CalendarPage";
import ChatPage from "./pages/ChatPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import PetPage from "./pages/PetPage";
import ProfilePage from "./pages/ProfilePage";
import SupportPage from "./pages/SupportPage";
import VetsPage from "./pages/VetsPage";

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/pet/:id" element={<PetPage />} />
					<Route path="/map" element={<MapPage />} />
					<Route path="/vets" element={<VetsPage />} />
					<Route path="/chat/:vetId" element={<ChatPage />} />
					<Route path="/calendar" element={<CalendarPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contacts" element={<ContactsPage />} />
					<Route path="/support" element={<SupportPage />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
