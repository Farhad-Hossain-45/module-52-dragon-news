import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div className="font-poppins max-w-6xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;