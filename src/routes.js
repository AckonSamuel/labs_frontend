import SplashScreen from "./components/splashscreen"
import Login from "./components/Login";
import Register from "./components/Register";
import EquipmentForm from './components/equipment-form';

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
    },
    {
        name: 'equipment-form',
        key: 'equipment-form',
        route: '/equipment-form',
        component: <EquipmentForm />,
    }
];

export default routes;