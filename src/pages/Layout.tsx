import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* Header */}
      <header className="">
        <div className="bg-primary py-2 flex md:flex-row flex-col items-center justify-center gap-4">
          <span className="font-semibold">
            Receba convites, sugestões de livros e novidades exclusivas!
          </span>
          <div className="flex space-x-2">
            <input type="text" placeholder="Email" className="px-2 py-1 " />
            <button className="px-2 py-1 bg-black text-white">
              Increver-se
            </button>
          </div>
        </div>
        <Navbar />
      </header>
      {/* Header */}

      <Outlet />

      {/* Footer section */}
      <Footer />
      {/* Footer section */}
    </>
  );
};

export default Layout;
