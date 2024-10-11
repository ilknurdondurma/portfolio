import { Outlet } from "react-router-dom";
import Navigation from "./navigation";
import { useMemo } from "react";
import Footer from "./footer";

export function Layout({ children }) {
  
    const bellekteTutulanNavbar = useMemo(() => <Navigation />, []);
  
    return (
      <div className="flex flex-col">
        {/* <div className="bg-primary text-white">{bellekteTutulanNavbar}</div> */}
        <main className="min-h-screen " >
          {children}
          <Outlet />
        </main>
        <Footer/>
      </div>
    );
  }