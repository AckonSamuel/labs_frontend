import SplashScreen from "./components/splashscreen"
import Login from "./components/Login";
import Register from "./components/Register";
import EquipmentForm from './components/equipment-form';
import UploadImage from './components/upload-equipment-images';
import VendorDetails from "./components/vendor-details";
import EquipmentSpecs from "./components/equipment-specs";
import SelectCategoryAndLab from "./components/select-category-and-lab";
import AddEquipmentModal from "./components/add-equipment-modal";

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
    },
    {
        name: 'upload-image',
        key: 'upload-image',
        route: '/upload-image',
        component: <UploadImage />,
    },
    {
        name: 'vendor-details',
        key: 'vendor-details',
        route: '/vendor-details',
        component: <VendorDetails />,
    },
    {
        name: 'equipment-specs',
        key: 'equipment-specs',
        route: '/equipment-specs',
        component: <EquipmentSpecs />,
    },
    {
        name: 'select-category-and-lab',
        key: 'select-category-and-lab',
        route: '/select-category-and-lab',
        component: <SelectCategoryAndLab />,
    },
    {
        name: 'add-equipment-modal',
        key: 'add-equipment-modal',
        route: '/add-equipment-modal',
        component: <AddEquipmentModal />,
    }
];

export default routes;