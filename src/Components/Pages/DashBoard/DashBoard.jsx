import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import useAdmin from "../../../Hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link className="text-black" to="/dashboard">
              My Appointments
            </Link>
          </li>
          <li>
            <Link className="text-black" to="/dashboard/review">
              Reviews
            </Link>
          </li>
          {admin && (
            <>
              <li>
                <Link className="text-black" to="/dashboard/users">
                  All Users
                </Link>
              </li>
              <li>
                <Link className="text-black" to="/dashboard/adddoctor">
                  Add Doctor
                </Link>
              </li>
              <li>
                <Link className="text-black" to="/dashboard/doctors">
                  Manage Doctor
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
