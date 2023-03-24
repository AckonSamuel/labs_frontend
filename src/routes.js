import SplashScreen from "./components/splashscreen"
import Login from "./components/Login";
import Register from "./components/Register";

const routes = [
    {
        name: 'splashscreen',
        key: 'splashscreen',
        route: '/welcome',
        component: <SplashScreen />,
    },
    {
        name: 'login',
        key: 'login',
        route: '/login',
        component: <Login />,
    },
    {
        name: 'register',
        key: 'register',
        route: '/register',
        component: <Register />,
    }
];

export default routes;