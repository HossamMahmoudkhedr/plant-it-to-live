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
import UserProfile from './components/userProfile';
import AdminLogin from './components/adminLogin';
import PlantsDetails from './components/plantsDetails';
import AdminDashboard from './components/adminDashboard';
import Activate from './components/activate';
import ForgotPassword from './components/forgotPassword';
import ForgetPasswordSecond from './components/forgetPasswordSecond';
import UserSuggestions from './components/userSuggestions';

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
				path="/userProfile"
				element={<UserProfile />}
			/>
			<Route
				path="/adminLogin"
				element={<AdminLogin />}
			/>
			<Route
				path="/plantsDetails"
				element={<PlantsDetails />}
			/>
			<Route
				path="/adminDashboard"
				element={<AdminDashboard />}
			/>
			<Route
				path="/activate"
				element={<Activate />}
			/>
			<Route
				path="/forgotPassword"
				element={<ForgotPassword />}
			/>
			<Route
				path="/forgotPasswordSecond"
				element={<ForgetPasswordSecond />}
			/>
			<Route
				path="/userSuggestions"
				element={<UserSuggestions />}
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
