import React from "react";
import { NavLink } from "react-router";
import { Home } from "../pages/Home";

const Nav = () => {
  return (
    <div className="bg-gray-100 ">
      <header className="p-4  bg-white shadow-md text-center flex justify-around">
        <h1 className=" text-rose-500 text-3xl font-bold">Recipe Book</h1>
      <nav className="space-x-4 text-2xl ">
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-rose-500" : undefined
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-rose-500" : undefined
          }
          to="/recipies"
        >
          Recipies
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-rose-500" : undefined
          }
          to="/categories"
        >
          Categories
        </NavLink>
      </nav>
       </header>
    </div>
  );
};

export default Nav;
