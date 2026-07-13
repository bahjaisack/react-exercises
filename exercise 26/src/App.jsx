import React from "react";
import { Outlet, NavLink } from "react-router";
import { AuthContext } from "./AuthContext";

const App = () => {
  const { isAuthenticated, logout } = React.useContext(AuthContext);


  const navLinkStyles = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-rose-50 text-rose-600 font-semibold"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-rose-500 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-rose-500/20">
                B
              </span>
              <h1 className="text-xl font-bold tracking-tight bg-gradient from-slate-900 to-slate-700 bg-clip-text text-transparent">
                My Blog
              </h1>
            </div>

            <nav className="flex items-center gap-2">
              <NavLink className={navLinkStyles} to="/">
                Home
              </NavLink>

              {isAuthenticated ? (
                <>
                  <NavLink className={navLinkStyles} to="/create">
                    Create Post
                  </NavLink>
                  
                
                  <span className="h-4 w-px bg-slate-200 mx-1" aria-hidden="true" />
                  
                  <button
                    onClick={logout}
                    className="ml-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  className="ml-2 inline-flex items-center justify-center rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-rose-500/10 transition-colors hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </nav>

          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
     
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;