import { Routes as AppRoutes, Route, Link } from 'react-router-dom';

import Home from "../components/Signup";
import Demo from "../components/Login";
// import About from "../components/Login";
import HorizontalLoginForm from "../components/Signup";
import Invoice from "../components/Signup";
// import { Route } from 'react-router-dom';

const Routes = () => {
    return (
        <AppRoutes>
            <Route path="/" element={<Home />} />
            <Route path="componets" element={<HorizontalLoginForm />} />
            <Route path="components" element={<Demo />} />
            {/* <Route path="invoices/:invoiceId" element={<Invoice />} /> */}
        </AppRoutes>
    );
};

export default Routes;