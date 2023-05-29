import {NavBar} from "../../components/NavBar";
import {Outlet} from "react-router-dom";
import Sidenav from "../../components/Sidenav";
import RightSidebar from "../../components/RightSidebar";


export function Home() {
    return (
        <>
            <NavBar/>
            <div className="container">
                <div className="row g-4">
                    <Sidenav/>
                    <Outlet/>
                    <RightSidebar/>
                </div>
            </div>
        </>
    )
}