import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import { FaUsers, FaPlusCircle, FaEdit, FaRegUser, FaHome, FaQuestionCircle } from "react-icons/fa";
import { FaCartShopping, FaStore } from "react-icons/fa6";
import logo from "/logo.png";

const sharedLinks = (
  <>
    <li className="mt-3">
      <Link to="/">
        <FaHome />
        Home
      </Link>
    </li>
    <li>
      <Link to="/store">
        <FaStore />
        Stores
      </Link>
    </li>
    <li >
      <Link to="/support">
        <FaQuestionCircle />
        Support
      </Link>
    </li>
  </>
);

const DashBoardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
          {/* Page content here */}
          <div className="flex justify-between items-center mx-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <MdDashboardCustomize />
            </label>
            <button className="btn btn-success rounded-full px-6 text-white lg:hidden flex items-center gap-2">
              <FaRegUser /> Logout
            </button>
          </div>
          <div className="mt-5 md:mt-2 mx-4">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className="flex justify-start mb-3">
                <img src={logo} alt="logo" className="w-20" />
                <span className="badge badge-primary">Admin</span>
              </Link>
            </li>
            <hr />
            <li className="mt-3">
              <Link to="/dashboard">
                <MdDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/orders">
                <FaCartShopping />
                Manage Orders
              </Link>
            </li>
            <li>
              <Link to="/dashboard/">
                <FaPlusCircle />
                Add Product
              </Link>
            </li>
            <li>
              <Link to="/dashboard/">
                <FaEdit />
                Manage Product
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users" className="mb-3">
                <FaUsers />
                All Users
              </Link>
            </li>
            <hr/>
            {/* Shares Links */}
            {sharedLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
