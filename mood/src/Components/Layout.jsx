import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { BarChart, PlusCircle, User, Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.png';

export function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#629878] shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-900">
                <img src={Logo} className="w-12 h-12" alt="Logo" />
                <span className="text-xl font-semibold text-[#fff5DC] capitalize">
                  Mood tracker
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#fff5DC] hover:text-white p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:flex sm:space-x-4">
              <NavLink to="/" icon={<PlusCircle />} label="Log Mood" />
              <NavLink to="/stats" icon={<BarChart />} label="Statistics" />
              <NavLink to="/profile" icon={<User />} label="Profile" />
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/" icon={<PlusCircle />} label="Log Mood" />
              <MobileNavLink to="/stats" icon={<BarChart />} label="Statistics" />
              <MobileNavLink to="/profile" icon={<User />} label="Profile" />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}


Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

function NavLink({ to, icon, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center p-1 my-2 rounded-full text-sm font-medium ${
        isActive
          ? 'text-[#fff5DC] border-r border-l border-t-[#fff5DC] border-b-[#fff5DC]'
          : 'text-[#fff5DC] hover:text-white'
      }`}
    >
      {React.cloneElement(icon, {
        className: 'w-5 h-5 mr-1.5',
      })}
      {label}
    </Link>
  );
}

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
  };

function MobileNavLink({ to, icon, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center py-2 px-3 rounded-md text-base font-medium ${
        isActive
          ? 'text-[#fff5DC] border-t border-b border-t-[#fff5DC] border-b-[#fff5DC]'
          : 'text-[#fff5DC] hover:text-white'
      }`}
    >
      {React.cloneElement(icon, {
        className: 'w-5 h-5 mr-2',
      })}
      {label}
    </Link>
  );
}


  
  MobileNavLink.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
  };

export default Layout;
