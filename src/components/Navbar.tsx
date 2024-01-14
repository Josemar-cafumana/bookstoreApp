import React, { useState } from "react";
import logo from "@assets/logo-kiela.png";
import {
  IoSearchOutline,
  IoCartOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import CartDialog from "./CartDialog";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  const navigator = useNavigate();

  return (
    <>
      <ToastContainer />
      <nav className="p-4 px-14 overflow-hidden flex  items-center justify-between">
        <NavLink to="/">
          <div className="w-28">
            <img src={logo} alt="Livraria Kiela" className="object-contain" />
          </div>
        </NavLink>

        <div className="md:flex hidden space-x-6 font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-primary " : "hover:text-primary"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-primary " : "hover:text-primary"
            }
            to="/about"
          >
            Sobre nós
          </NavLink>
        </div>

        <div className="flex space-x-4">
          <button onClick={() => navigator("/search")}>
            <IoSearchOutline size={24} />
          </button>
          <button>
            <IoHeartOutline size={24} />
          </button>

          <button onClick={() => setIsOpen((prev) => !prev)}>
            <IoCartOutline size={24} />
          </button>
        </div>
      </nav>

      <CartDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
