import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage';
import RootLayout from './pages/rootLayout';
import Login from './components/login';
import Signup from './components/signup';
import User from './components/user';
import Chat from './components/chat';
import CropRecommendation from './components/cropRecommendation';
import DetectDiseases from './components/detectDiseases';
import Notfound from './pages/notfound';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}>
			<Route
				index
				element={<LandingPage />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/signup"
				element={<Signup />}
			/>
			<Route
				path="/user"
				element={<User />}
			/>
			<Route
				path="/chat"
				element={<Chat />}
			/>
			<Route
				path="/cropRecommendation"
				element={<CropRecommendation />}
			/>
			<Route
				path="/detectDiseases"
				element={<DetectDiseases />}
			/>
			<Route
				path="*"
				element={<Notfound />}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
